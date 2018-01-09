import * as types from "../constants/TrackConstants";

const initialState = {
  audio: null,
  volume: 0.1,
  trackIndex: 0,
};

const track = (state = initialState, action) => {
  switch (action.type) {
    case types.TRACK_SET: {
      return {
        ...state,
        trackIndex: action.payload,
      };
    }

    case types.TRACK_SET_AUDIO: {
      return {
        ...state,
        audio: action.payload,
      };
    }

    case types.TRACK_SET_NULL: {
      return {
        ...state,
        audio: null,
      };
    }
    default:
      return state;
  }
};

export default track;