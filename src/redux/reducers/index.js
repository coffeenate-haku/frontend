import { combineReducers } from "redux";
import profilereducer from "./profilereducer";

const rootReducers = combineReducers({
  profile: profilereducer
});

export default rootReducers;
