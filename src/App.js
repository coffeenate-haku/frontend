import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Survey1 from "./pages/Survey1";
import Survey2 from "./pages/Survey2";
import Survey3 from "./pages/Survey3";
import SurveyResultPage from "./pages/SurveyResultPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/survey/1" component={Survey1} />
        <Route path="/survey/2" component={Survey2} />
        <Route path="/survey/3" component={Survey3} />
        <Route path="/survey/result" component={SurveyResultPage} />
      </Switch>
    </Router>
  );
}

export default App;
