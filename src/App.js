import React from "react";
import Navigation from "../src/components/Navbar";
import Jumbotron from "../src/components/Header";
import Content from "../src/components/Content";
import Survey1 from "../src/components/Survey1";
import Survey2 from "../src/components/Survey2";
import Survey3 from "../src/components/Survey3";
import SurveyResult from "../src/components/SurveyResult"

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <Content />
      <Survey1 />
      <Survey2 />
      <Survey3 />
      <SurveyResult />
    </React.Fragment>
  );
}

export default App;
