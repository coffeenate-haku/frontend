import React from "react";
import Navigation from "../components/Navbar";
import Jumbotron from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Jumbotron />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}
