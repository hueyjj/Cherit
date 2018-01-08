import * as types from "../constants/TrackConstants";

const initialState = {
  trackIndex: -1,
};

const track = (state = initialState, action) => {
  switch (action.type) {
    case types.TRACK_SET: {
      return {
        ...state,
        trackIndex: action.payload,
      };
    }
    default:
      return state;
  }
};

export default track;