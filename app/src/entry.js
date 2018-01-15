import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import RootContainer from "./containers/RootContainer";
import configureStore from './store/configureStore';

import LibraryTest from "./test/libtest";

let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>
  , document.getElementById('root')
);

// Tests
//const dir = "C://users/jj/github//project-blue//music//";
const dir = "C:/Users/JJ/Music/addedmusic_2017-11-20"
let LibTest = new LibraryTest(store);
LibTest.init(dir);
LibTest.run();