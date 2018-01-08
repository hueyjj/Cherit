import {
  ERROR_LOAD_LIBRARY,
  ERROR_LOADING_FILES,
  ERROR_BUILDING_FILE_METADATA,
  MUSIC_FORMAT,
} from "../constants/LibraryConstants";

import { remote } from "electron";
const { dialog } = remote;
import mm from 'musicmetadata';
import fs from 'fs';
import path from "path";

export const getDirectories = () => {
  return new Promise((resolve, reject) => {
    dialog.showOpenDialog({
      properties: ['openDirectory', 'multiSelections'],
    }, (dirs) => {
      dirs ? resolve(dirs) : reject(ERROR_LOAD_LIBRARY);
    });
  })
    .catch((reason) => {
      console.warn("getDirectories: " + reason);
    });
};

export const getFiles = (dirs) => {
  return new Promise((resolve, reject) => {
    let files = {};
    dirs.forEach((dir) => {
      files = {
        ...files,
        [dir]: fs.readdirSync(dir),
      };
    });
    files ? resolve(files) : reject(ERROR_LOADING_FILES);
  })
    .catch((reason) => {
      console.warn("getFiles: " + reason);
    });
};

export const buildTrackData = (filePath) => {
  return new Promise((resolve, reject) => {
    let readableStream = fs.createReadStream(filePath);
    let parser = mm(readableStream, function (err, metadata) {
      readableStream.close();
      if (err) reject(err);

      const {
        artist, album, albumartist,
        title, year, track,
        disk, genre, picture, duration
      } = metadata;

      resolve({
        path: filePath,
        artist: artist,
        album: album,
        albumartist: albumartist,
        title: title,
        year: year,
        track: track,
        disk: disk,
        genre: genre,
        picture: picture,
        duration: duration,
      });
    });
  })
    .catch((reason) => {
      // console.warn("No music meta data found");
      // console.warn(`buildTrackData: file=${file} filePath=${filePath} ` + reason);
    });
};

export const buildTrackList = (dirsFiles) => {
  return new Promise(async (resolve, reject) => {
    let trackList = [];

    for (let dir in dirsFiles) {
      await Promise.all(dirsFiles[dir].map(async (fileName) => {
        let filePath = path.join(dir, fileName),
          title = path.parse(filePath).name,
          fileExt = path.extname(filePath);

        if (MUSIC_FORMAT.lastIndexOf(fileExt) === -1)
          return;

        const track = await buildTrackData(filePath);

        if (track && (track.path.length == 0 || track.title.length == 0)) {
          track["path"] = filePath;
          track["title"] = title;
        }

        trackList.push(track ? track : { path: filePath, title: title });
      }));
    }
    trackList.length > 0 ? resolve(trackList) : reject(ERROR_BUILDING_FILE_METADATA);
  })
    .catch((reason) => {
      console.warn("buildTrackList: " + reason);
    });
};