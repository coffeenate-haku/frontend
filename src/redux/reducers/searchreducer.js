const initialState = {
<<<<<<< Updated upstream:src/redux/reducers/searchreducer.js
  keyword: ""
=======
  recommendation: []
>>>>>>> Stashed changes:src/redux/reducers/recommendationreducer.js
};

 const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< Updated upstream:src/redux/reducers/searchreducer.js
    case "search":
      return {
        ...state,
        search: action.payload
=======
    case "GET_RECOMMENDATION":
      return {
        ...state,
        recommendation: action.payload
>>>>>>> Stashed changes:src/redux/reducers/recommendationreducer.js
      };
    default:
      return state;
  }
};

export default recommendationReducer;