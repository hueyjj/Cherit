import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return process.env.NODE_ENV == 'dev' ?
    createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        ReduxThunk,
        createLogger({
          collapsed: true,
        }),
      ),
    )
    : createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        ReduxThunk,
      ),
    );
}
