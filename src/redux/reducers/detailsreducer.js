const initialState = {
  details: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "details":
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};
