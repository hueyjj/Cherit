import * as types from "../constants/LibraryConstants";

const initialState = {
  onFetch: false,
  isFetching: false,
  fetched: false,
  dirs: [],
  dirsFiles: [],
  tracklist: [],
};

const library = (state = initialState, action) => {
  switch (action.type) {
    case types.LIBRARY_SET_DIRS: {
      return {
        ...state,
        dirs: action.payload,
      };
    }

    case types.LIBRARY_SET_DIRS_FILES: {
      return {
        ...state,
        dirsFiles: action.payload,
      }
    }

    case types.LIBRARY_ADD_TRACK: {
      return {
        ...state,
        tracklist: [...state.tracklist, action.payload],
      };
    }
    
    case types.LIBRARY_CHANGE_TRACKLIST: {
      return {
        ...state,
        tracklist: action.payload,
      };
    }

    default:
      return state;
  }
}

export default library;