import { remote } from "electron";
const { app, dialog } = remote;

import mm from 'musicmetadata';
import fs from 'fs';
import path from "path";

import * as types from "../constants/AppConstants";

import {
  ERROR_LOAD_LIBRARY,
  ERROR_LOADING_FILES,
  ERROR_BUILDING_FILE_METADATA,
  MUSIC_FORMAT,
} from "../constants/LibraryConstants";

export const getDownloadDir = () => {
  return new Promise(async (resolve, reject) => {
    let path = await app.getPath("downloads");
    if (path)
      resolve(path);
    else
      reject("CANNOT FIND DOWNLOAD DIR");
  })
    .catch((reason) => {
      console.error("getDownloadDir: " + reason);
    });
};

export const getProjDataDir = () => {
  return path.join(app.getPath("appData"), types.APP_NAME);
};

export const getDirectories = (dir) => {
  return new Promise((resolve, reject) => {
    if (dir) {
      resolve([dir]);
      return;
    }
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

export const range = (queue, a, b) => {
  let n = [];
  if (queue) {
    return [...queue];
  }
  else if (a && b) {
    for (let x = a; x < b; x++) n.push(x);
    return n;
  } else if (a) {
    for (let x = 0; x < a; x++) n.push(x);
    return n;
  } else if (b) {
    for (let x = b - 1; b >= 0; x--) n.push(x);   // reverse -> null, 3 -> [2, 1, 0]
    return n;
  } else {
    return n;
  }
};

export const randomize = (queue) => {
  if (queue.length <= 0) return [];

  let random = (n) => (Math.floor(Math.random(n) * Math.floor(n)));

  let oldQueue = [...queue], newQueue = [];
  while (oldQueue.length > 0) {
    let i = random(oldQueue.length);
    newQueue.push(oldQueue[i]);
    oldQueue.splice(i, 1);
  }
  return newQueue;
};

export const timeFunction = (fn, ...theArgs) => {
  var t0 = performance.now();
  fn(...theArgs);
  var t1 = performance.now();
  return fn.name + "completed in " + (t1 - t0) + " ms.";
};

export const pad = (time) => {
  return time > 9 ? time : "0" + time;
}

/*  Takes two times in seconds and converts them to hh:mm:ss format
*/
export const toTimeFormat = (time1, time2) => {
  if (time1 == 0 && time2 == 0) return;

  let t1 = new Date(1969, 1, 1, 0, 0, time1, 0);
  let hr1 = pad(t1.getHours());
  let min1 = pad(t1.getMinutes());
  let sec1 = pad(t1.getSeconds());

  let t2 = new Date(1969, 1, 1, 0, 0, time2, 0);
  let hr2 = pad(t2.getHours());
  let min2 = pad(t2.getMinutes());
  let sec2 = pad(t2.getSeconds());

  if (hr2 > 0) {
    return `${hr1}:${min1}:${sec1} / ${hr2}:${min2}:${sec2}`
  } else if (min2 > 0) {
    return `${min1}:${sec1} / ${min2}:${sec2}`
  } else if (sec2 > 0) {
    return `${sec1} / ${sec2}`
  } else {
    return `00:00:00 / 00:00:00`;
  }
}