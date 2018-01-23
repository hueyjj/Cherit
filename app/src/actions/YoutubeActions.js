import * as types from "../constants/YoutubeConstants";

export const showYoutube = () => ({
  type: types.YOUTUBE_SHOW,
})

export const hideYoutube = () => ({
  type: types.YOUTUBE_HIDE,
})

export const setYoutubeImage = (image) => ({
  type: types.YOUTUBE_SET_IMAGE,
  payload: image,
});

export const setYoutubeInfo = ({ title, desc, }) => ({
  type: types.YOUTUBE_SET_INFO,
  payload: {
    title,
    desc,
  }
});

export const clearYoutube = () => ({
  type: types.YOUTUBE_CLEAR,
})