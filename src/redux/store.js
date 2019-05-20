import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const initialState = {};
const middleware = [thunk];

const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware)
//   // other store enhancers if any
// );
// const store = createStore(reducer, enhancer);

const store = createStore(
  rootReducer,
  // initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
