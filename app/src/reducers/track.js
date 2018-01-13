import * as types from "../constants/TrackConstants";
import { randomize } from "../utils/utils";
import { base64ArrayBuffer } from "../utils/utils.github.js";

const initialState = {
  track: null,
  audio: null,
  volume: 0.1,
  index: 0,
  image: null,

  loop: false,
  queue: [],
};

const track = (state = initialState, action) => {
  switch (action.type) {
    case types.TRACK_SET: {
      return {
        ...state,
        track: action.payload.track,
        index: action.payload.index,
        image: action.payload.image,
      };
    }

    case types.TRACK_SET_QUEUE: {
      return {
        ...state,
        queue: action.payload,
      };
    }

    case types.TRACK_SHUFFLE_QUEUE: {
      return {
        ...state,
        queue: randomize(state.queue),
      }
    }

    case types.TRACK_SET_NEW_AUDIO: {
      return {
        ...state,
        audio: action.payload,
      };
    }

    case types.TRACK_REMOVE_AUDIO: {
      if (state.audio) {
        state.audio.src = "";
        state.audio.load();
      }
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