import React from "react";
import Navigation from "../src/components/Navbar";
import Jumbotron from "../src/components/Header";
import Content from "../src/components/Content";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <Content />
    </React.Fragment>
  );
}

export default App;
