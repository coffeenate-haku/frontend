import React from "react"
import { Navbar, Form, Button, FormControl, Image } from "react-bootstrap"
import Coffee from "../assets/logos/logo-main.svg"
import { Link } from "react-router-dom"

const style = {
  navBg: {
    backgroundColor: "#f5f1e8"
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
  button: {
    backgroundColor: "#4c3a32",
    border: "none",
    margin: "0px 10px"
  }
}

export default class SearchNav extends React.Component {
  render() {
    return (
      <Navbar style={style.navBg} expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <Image width="250" src={Coffee} alt="/" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={style.nav} id="basic-navbar-nav">
          <p style={style.p}>Filter:</p>
          <Form inline>
            <FormControl
              style={style.form}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button style={style.button}>Type</Button>
            <Button style={style.button}>Price</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
