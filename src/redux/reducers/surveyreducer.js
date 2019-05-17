const initialState = {
  sugarLevel: [],
  bodyLevel: [],
  foamLevel: [],
  milkLevel: [],
  flavors: []
}

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_SUGAR_LEVEL_SURVEY":
    return{
      ...state,
      sugarLevel: action.payload
    }
    case "HANDLE_BODY_LEVEL_SURVEY":
    return{
      ...state,
      bodyLevel: action.payload
    }
    default:
      return state;
  }
}

export default surveyReducer;