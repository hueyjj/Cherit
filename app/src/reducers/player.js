import * as types from "../constants/PlayerConstants";

const initialState = {
  duration: 0,
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

    case types.PLAYER_SET_DURATION: {
      return {
        ...state,
        duration: action.payload,
      }
    }

    default:
      return state;
  }
}

export default player;