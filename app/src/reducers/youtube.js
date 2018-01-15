import * as types from "../constants/YoutubeConstants";

const initialState = {
  image: null,
};

const youtube = (state = initialState, action) => {
  switch (action.type) {
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