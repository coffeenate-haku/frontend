import { combineReducers } from "redux";
import profilereducer from "./profilereducer";
import surveyReducer from "./surveyreducer";

const rootReducers = combineReducers({
  profile: profilereducer,
  survey: surveyReducer
});

export default rootReducers;
