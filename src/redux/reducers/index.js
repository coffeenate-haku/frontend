import { combineReducers } from "redux";
import profilereducer from "./profilereducer";
import surveyReducer from "./suveyreducer";

const rootReducers = combineReducers({
  profile: profilereducer,
  survey: surveyReducer
});

export default rootReducers;
