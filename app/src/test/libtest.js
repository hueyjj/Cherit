import * as LibraryActions from "../actions/LibraryActions";
import * as PlayerActions from "../actions/PlayerActions";
import * as TrackActions from "../actions/TrackActions";


export const TestLibrary = () => {
  console.log(dispatch);
  LibraryActions.loadLibrary(dir)(dispatch, getState);
}

class LibraryTest {

  constructor(store) {
    console.log("LibraryTest constructor");
    this.store = store;
    this.dispatch = store.dispatch;
    this.getState = store.getState;

    this.init = this.init.bind(this);
  }

  init(dir) {
    console.log("LibraryTest init");
    this.dir = dir;
  }

  run() {
    console.log('LibraryTest run');
    LibraryActions.loadLibrary(this.dir)(this.dispatch, this.getState);
  }
}

export default LibraryTest;