import * as utils from "../utils/utils"
import * as types from "../constants/LibraryConstants";

export const fetchLibrary = () => ({
  type: "",
});

export const loadLibraryAction = () => ({
  type: "",
});

export const setLibraryDirs = (dirs) => ({
  type: types.LIBRARY_SET_DIRS,
  payload: dirs,
});

export const setLibraryDirsFiles = (dirsFiles) => ({
  type: types.LIBRARY_SET_DIRS_FILES,
  payload: dirsFiles,
});

export const addTrackToLibrary = (track) => ({
  type: types.LIBRARY_ADD_TRACK,
  payload: track,
});

export const changeToTrackList = (trackList) => ({
  type: types.LIBRARY_CHANGE_TRACKLIST,
  payload: trackList,
})

export const setLibraryTrackList = (trackList) => ({
  type: types.LIBRARY_SET_TRACKLIST,
  payload: trackList,
})

export const loadLibrary = () => async (dispatch, getState) => {
  const dirs = await utils.getDirectories(); // [...dirs]
  dispatch(setLibraryDirs(dirs));
  const dirsFiles = await utils.getFiles(dirs); // { dir: [...files], ... }
  dispatch(setLibraryDirsFiles(dirsFiles));
  const trackList = await utils.buildTrackList(dirsFiles);
  dispatch(setLibraryTrackList(trackList));
};

// export const loadLibrary = () => async (dispatch, getState) => {
//   // First get directories
//   utils.getDirectories()
//     .then((libraryPaths) => {
//       dispatch(setLibraryPaths(libraryPaths));
//     })
//     .then(() => {

//       // Then get files for each directories
//       const { library } = getState();
//       utils.getFilesFromDirectories(library.dirs)
//         .then((pathAndFiles) => {
//           dispatch(setLibraryPathsAndFiles(pathAndFiles));
//           return pathAndFiles;
//         })
//         .then((pathAndFiles) => {

//           // Set current track list to all files that were just scanned
//           let tracklist = []
//           console.log(pathAndFiles);
//           for (const dir in pathAndFiles) {
//             for (const file of pathAndFiles[dir]) {
//               tracklist.push({
//                 "name": file,
//                 "path": dir + file,
//               })
//             }
//           }
//           dispatch(changeToTrackList(tracklist));
//         })
//         .catch((reason) => {
//           console.warn("loadLibrary -> getFilesFromDirectories: " + reason);
//         });
//     })
//     .then(() => {

//     })
//     .catch((reason) => {
//       console.warn("loadLibrary: " + reason);
//     });
// };
