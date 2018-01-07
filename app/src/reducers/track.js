const initialState = {
  onTrackClick: false,
};

const track = (state = initialState, action) => {
  switch (action.type) {
    case "TRACK_CLICKED": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};