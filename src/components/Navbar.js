import React from "react";
import { Navbar } from "react-bootstrap";
import Coffee from "../assets/logos/logo-main.svg";
import { NavLink } from "react-router-dom";

const style = {
  navStyle: {
    backgroundColor: "#f5f1e8"
  },
  justify: {
    display: "flex",
    justifyContent: "space-around"
  },

  logo: {
    margin: "0px auto"
  },

  link: {
    color: "#4C3A32",
    fontSize: "24px"
  },

  specialLink: {
    backgroundColor: "#4C3A32",
    color: "#f5f1e8",
    fontSize: "24px"
  }
};

class Navigation extends React.Component {
  render() {
    return (
      <Navbar style={style.navStyle} collapseOnSelect sty>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={style.justify} id="responsive-navbar-nav">
          <NavLink to="/" style={style.link}>
            Home
          </NavLink>
          <NavLink to="/search" style={style.link}>
            Search
          </NavLink>
          <Navbar.Brand>
            <img
              style={style.logo}
              alt=""
              src={Coffee}
              width="300"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <NavLink to="/login" style={style.link}>
            Login
          </NavLink>
          <NavLink to="/signup" style={style.specialLink}>
            Sign Up
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
