import * as types from "../constants/PlayerConstants";

const initialState = {
  duration: 0,
  currentTime: 0,
  
  loop: false,
  queueLoop: false,
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
    
    case types.PLAYER_TOGGLE_LOOP: {
      return {
        ...state,
        loop: !state.loop,
      };
    }

    case types.PLAYER_TOGGLE_QUEUE_LOOP: {
      return {
        ...state,
        queueLoop: !state.queueLoop,
      };
    }

    default:
      return state;
  }
}

export default player;