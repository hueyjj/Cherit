import * as mode from "../constants/PlayerConstants";

const initialState = {
  mode: mode.FULL_VIEW_MODE,
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case mode.FULL_VIEW_MODE: {
      return {
        ...state,
        mode: mode.FULL_VIEW_MODE,
      };
    }

    case mode.SIMPLE_VIEW_MODE: {
      return {
        ...state,
        mode: mode.SIMPLE_VIEW_MODE,
      };
    }

    case mode.MINI_VIEW_MODE: {
      return {
        ...state,
        mode: mode.MINI_VIEW_MODE,
      };
    }

    default:
      return state;
  }
}

export default player;