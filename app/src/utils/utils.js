import {
  ERROR_LOAD_LIBRARY,
  ERROR_LOADING_FILES,
  ERROR_BUILDING_FILE_METADATA,
} from "../constants/LibraryConstants";

import mm from 'musicmetadata';

const remote = window.require("electron").remote // require vs. window.require https://github.com/electron/electron/issues/7300#issuecomment-285885725
const { dialog } = remote
const fs = remote.require('fs');
const path = require('path');

export const getDirectories = () => {
  return new Promise((resolve, reject) => {
    dialog.showOpenDialog({
      properties: ['openDirectory', 'multiSelections'],
    },
      (dirs) => {
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

export const buildTrackData = (filePath, file) => {
  let fileMetaData = {};
  let readableStream = fs.createReadStream(filePath);
  let parser = mm(readableStream, function (err, metadata) {
    if (err) throw err;

    const {
      artist, album, albumartist,
      title, year, track,
      disk, genre, picture, duration
    } = metadata;

    fileMetaData = {
      file: {
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
      }
    }
    readableStream.close();
  });
  return fileMetaData;
};

export const buildTrackList = (dirsFiles) => {
  return new Promise((resolve, reject) => {
    let tracklist = {};

    for (let dir in dirsFiles) {
      dirsFiles[dir].forEach((file) => {
        // let filePath = "C\:\\Users\\JJ\\github\\project-white\\music\\music1.m4a";
        // let readableStream = fs.createReadStream(filePath);
        // var parser = mm(readableStream, function (err, metadata) {
        //   if (err) throw err;
        //   readableStream.close();
        // });
        // console.log(filePath);
        // const track = buildTrackData(filePath, file);
        // tracklist = {
        //   ...tracklist,
        //   track,
        // }
        //console.log(track);
      });
    }
    tracklist ? resolve(tracklist) : reject(ERROR_BUILDING_FILE_METADATA);
  })
    .catch((reason) => {
      console.warn("buildTrackList: " + reason);
    });
};


// export const getDirectories = () => {
//   return new Promise((resolve, reject) => {
//     dialog.showOpenDialog({
//       properties: ['openDirectory', 'multiSelections'],
//     }, (dirPaths) => {
//       if (dirPaths)
//         resolve(dirPaths);
//       else
//         reject(ERROR_LOAD_LIBRARY);
//     });
//   });
// };

// export const getFilesFromDirectories = (dirs) => {
//   return new Promise((resolve, reject) => {
//     let pathAndFiles = {};
//     dirs.forEach((dir) => {
//       ;
//       pathAndFiles = {
//         ...pathAndFiles,
//         [dir]: fs.readdirSync(dir),
//       };
//     });
//     if (pathAndFiles) resolve(pathAndFiles);
//     else reject(ERROR_LOADING_FILES);

//   });
// };
