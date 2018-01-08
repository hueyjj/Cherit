import * as types from "../constants/TrackConstants";

const initialState = {
  
};

const track = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default track;