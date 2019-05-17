import { combineReducers } from "redux";
import profileReducer from "./profilereducer";
import surveyReducer from "./surveyreducer";
import recommendationReducer from "./recommendationreducer";

const rootReducers = combineReducers({
  profile: profileReducer,
  survey: surveyReducer,
  recommendation: recommendationReducer
});

export default rootReducers;
