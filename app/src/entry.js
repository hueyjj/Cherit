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

if (process.env.NODE_ENV == 'dev') {
  // Tests
  const os = require("os");
  //const dir = "C://users/jj/github//project-blue//music//";
  const dir = os.platform() == "win32" ?
    "C:/Users/JJ/Music/addedmusic_2017-11-20"
    : "/home/huey/github/project-blue/music/";

  let LibTest = new LibraryTest(store);
  LibTest.init(dir);
  LibTest.run();
}