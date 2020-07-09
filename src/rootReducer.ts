const initState = {
  helloWorld: "helloWorld",
};

export interface action {
  type: String;
}

const rootReducer = (state = initState, action: action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
