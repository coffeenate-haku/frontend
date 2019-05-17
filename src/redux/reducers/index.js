import { combineReducers } from "redux";
import profilereducer from "./profilereducer";
import surveyReducer from "./surveyreducer";
import recommendationReducer from './recommendation'

const rootReducers = combineReducers({
  profile: profilereducer,
  survey: surveyReducer,
  recommendation: recommendationReducer
});

export default rootReducers;
