import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Survey1 from "./pages/Survey1";
import Survey2 from "./pages/Survey2";
import Survey3 from "./pages/Survey3";
import Survey4 from "./pages/Survey4";
import Survey5 from "./pages/Survey5";
import Survey6 from "./pages/Survey6";
import Result from "./pages/Result";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
// import store from "./store";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/survey/1" component={Survey1} />
        <Route path="/survey/2" component={Survey2} />
        <Route path="/survey/3" component={Survey3} />
        <Route path="/survey/4" component={Survey4} />
        <Route path="/survey/5" component={Survey5} />
        <Route path="/survey/6" component={Survey6} />
        <Route path="/result" component={Result} />
        <Route path="/details" component={Details} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
