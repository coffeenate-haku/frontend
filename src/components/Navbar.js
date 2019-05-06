import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Coffee from "../assets/logos/logo-main.svg";

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
          <Nav.Link style={style.link}>Home</Nav.Link>
          <Nav.Link style={style.link}>Search</Nav.Link>
          <Navbar.Brand>
            <img
              style={style.logo}
              alt=""
              src={Coffee}
              width="300"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav.Link style={style.link}>Login</Nav.Link>
          <Nav.Link style={style.specialLink}>Sign Up</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
