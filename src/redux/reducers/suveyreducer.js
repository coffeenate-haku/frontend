const initialState = {
  hotCold: [],
  sugarLevel: [],
  bodyLevel: [],
  foamLevel: [],
  milkLevel: [],
  flavors: []
};

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_HOT_COLD_SURVEY":
      return {
        ...state,
        hotCold: action.payload
      };
    case "HANDLE_SUGAR_LEVEL_SURVEY":
      return {
        ...state,
        sugarLevel: action.payload
      };
    case "HANDLE_BODY_LEVEL_SURVEY":
      return {
        ...state,
        bodyLevel: action.payload
      };
    case "HANDLE_FOAM_LEVEL_SURVEY":
      return {
        ...state,
        foamLevel: action.payload
      };
    case "HANDLE_MILK_LEVEL_SURVEY":
      return {
        ...state,
        milkLevel: action.payload
      };
    case "HANDLE_FLAVORS":
      return {
        ...state,
        flavors: action.payload
      };
    default:
      return state;
  }
};

export default surveyReducer;
