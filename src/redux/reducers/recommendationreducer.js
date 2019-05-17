const initialState = {
  name: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "recommendation":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
