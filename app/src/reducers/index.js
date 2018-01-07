import { combineReducers } from 'redux';
import player from '../reducers/player';
import library from "../reducers/library";

const rootReducer = combineReducers({
  player,
  library,
});

export default rootReducer
