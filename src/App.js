import React from "react";
import Navigation from "../src/components/Navbar";
import Jumbotron from "../src/components/Header";
import Content from "../src/components/Content";
import Survey1 from "../src/components/Survey1";
import Survey2 from "../src/components/Survey2";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <Content />
      <Survey1 />
      <Survey2 />
    </React.Fragment>
  );
}

export default App;
