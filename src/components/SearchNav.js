import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Coffee from "../assets/logos/logo-main.svg";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

const style = {
  navBg: {
    backgroundColor: "#f5f1e8"
  },

  menu: {
    paddingRight: "300px"
  },

  form: {
    width: "600px"
  },

  nav: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "50px"
  },
  p: {
    margin: "auto 20px"
  },
  link: {
    color: "#4C3A32",
    fontSize: "24px",
    width: "800px"
  }
};

class SearchNav extends React.Component {
  render() {
    return (
      <Navbar.Toggle>
        <Navbar style={style.navBg} expand="lg">
          <NavLink to="/">
            <Navbar.Brand>
              <img
                style={style.logo}
                alt=""
                src={Coffee}
                width="300"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </NavLink>

          {this.props.isAuthenticated ? (
            <NavLink to="/dashboard" style={style.link}>
              Profile
            </NavLink>
          ) : (
            <NavLink style={style.link} />
          )}
        </Navbar>
      </Navbar.Toggle>
    );
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.profile.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(SearchNav);
