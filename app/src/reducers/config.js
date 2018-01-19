import * as types from "../constants/ConfigConstants";

const initialState = {
  visible: false,
}

const config = (state = initialState, action) => {
  switch (action.type) {
    case types.CONFIG_SHOW_MENU: {
      return {
        ...state,
        visible: true,
      };
    }

    case types.CONFIG_HIDE_MENU: {
      return {
        ...state,
        visible: false,
      };
    }

    default:
      return state;
  }
}

export default config;