const initialState = {
  keyword: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "search":
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};
