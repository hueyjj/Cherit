import { combineReducers } from 'redux';

import player from '../reducers/player';
import library from "../reducers/library";
import track from "../reducers/track";

const rootReducer = combineReducers({
  player,
  library,
  track,
});

export default rootReducer
