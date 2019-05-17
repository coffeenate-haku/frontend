const initialState = {
  recommendation: []
};

 const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECOMMENDATION":
      return {
        ...state,
        recommendation: [...action.payload]
      };
    default:
      return state;
  }
};

export default recommendationReducer;