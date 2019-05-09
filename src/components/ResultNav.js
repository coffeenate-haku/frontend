import React from "react";
import { Navbar, Image } from "react-bootstrap";
import Coffee from "../assets/logos/logo-main.svg";
import { Link } from "react-router-dom";

const style = {
  navBg: {
    backgroundColor: "#f5f1e8"
  },

  nav: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "50px"
  }
};

export default class ResultNav extends React.Component {
  render() {
    return (
      <Navbar style={style.navBg} expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <Image width="250" src={Coffee} alt="" />
          </Link>
        </Navbar.Brand>
        <NavLink style={style.nav} to="/profile">
          Profile
        </NavLink>
      </Navbar>
    );
  }
}
