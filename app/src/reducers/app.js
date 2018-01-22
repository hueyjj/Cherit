import * as types from "../constants/AppConstants";

const initialState = {
  title: types.APP_NAME,
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_SET_TITLE: {
      return {
        ...state,
        title: action.payload,
      };
    }

    default:
      return state;
  }
}

export default app;