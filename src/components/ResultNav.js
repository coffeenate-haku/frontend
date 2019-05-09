import React from "react";
import { Navbar, Image } from "react-bootstrap";
import Coffee from "../assets/logos/logo-main.svg";
import { Link } from "react-router-dom";

const style = {
  navBg: {
    backgroundColor: "#f5f1e8",
    justifyContent: "space-between",
    padding: "0px 50px"
  },

  nav: {
    marginRight: "30px",
    color: "#4C3A32",
    fontSize: "24px"
  }
};

export default class ResultNav extends React.Component {
  render() {
    return (
      <Navbar style={style.navBg} expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/dashboard">
            <Image width="250" src={Coffee} alt="" />
          </Link>
        </Navbar.Brand>
        <Link style={style.nav} to="/dashboard">
          Profile
        </Link>
      </Navbar>
    );
  }
}
