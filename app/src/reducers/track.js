import * as types from "../constants/TrackConstants";
import { randomize } from "../utils/utils";
import { base64ArrayBuffer } from "../utils/utils.github.js";

const initialState = {
  track: null,
  audio: null,
  volume: 0.1,
  index: 0,
  image: null,

  looop: false,
  queue: [],
};

const track = (state = initialState, action) => {
  switch (action.type) {
    case types.TRACK_SET: {
      let image = null;
      if (action.payload.track && action.payload.track.picture.length > 0) {
        let pic = action.payload.track.picture;
        image = "data:image/" + pic[0].format + ";base64,"
          + base64ArrayBuffer(pic[0].data);
      }
      return {
        ...state,
        track: action.payload.track,
        index: action.payload.index,
        image: image,
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
      let audio = new Audio();
      audio.src = action.payload.src;
      audio.volume = action.payload.volume;
      audio.index = action.payload.index;
      return {
        ...state,
        audio: audio,
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