import * as types from "../constants/PlayerConstants";

const initialState = {
  currentTime: 0,
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case types.PLAYER_UPDATE_PROGRESS: {
      return {
        ...state,
        currentTime: action.payload,
      }
    }

    default:
      return state;
  }
}

export default player;