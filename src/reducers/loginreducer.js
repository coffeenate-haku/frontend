const initialState = {
  id: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
