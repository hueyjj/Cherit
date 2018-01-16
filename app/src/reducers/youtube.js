import * as types from "../constants/YoutubeConstants";

const initialState = {
  shouldShow: false,
  info: {
    title: "",
    desc: "",
  },
  image: null,
};

const youtube = (state = initialState, action) => {
  switch (action.type) {
    case types.YOUTUBE_SHOW: {
      return {
        ...state,
        shouldShow: true,
      };
    }

    case types.YOUTUBE_HIDE: {
      return {
        ...state,
        shouldShow: false,
      };
    }

    case types.YOUTUBE_SET_INFO: {
      return {
        ...state,
        info: {
          title: action.payload.title,
          desc: action.payload.desc,
        },
      };
    }

    case types.YOUTUBE_SET_IMAGE: {
      return {
        ...state,
        image: action.payload,
      };
    }

    default:
      return state;
  }
};

export default youtube;