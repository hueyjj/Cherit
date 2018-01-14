import * as types from "../constants/TrackConstants";
import { randomize } from "../utils/utils";

const initialState = {
  track: null,
  audio: null,
  volume: 0.1,
  index: 0,
  image: null,

  queue: [],
  prevStack: [],
  copyQueue: [],
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

    case types.TRACK_COPY_QUEUE: {
      return {
        ...state,
        copyQueue: [...state.queue],
      };
    }

    case types.TRACK_SHUFFLE_QUEUE: {
      let randomQ = randomize(state.copyQueue);
      randomQ = randomQ[0] == state.index ? randomQ.slice(1) : randomQ ;
      return {
        ...state,
        queue: randomQ,
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

    case types.TRACK_SET_VOLUME: {
      return {
        ...state,
        volume: action.payload,
      };
    }

    default:
      return state;
  }
};

export default track;