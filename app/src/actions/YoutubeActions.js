import * as types from "../constants/YoutubeConstants";

export const setYoutubeImage = (image) => ({
  type: types.YOUTUBE_SET_IMAGE,
  payload: image,
});