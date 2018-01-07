const initialState = {
  counter: 0,
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC": {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }
    default:
      return state;
  }   
};

export default counter;   