import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import "../index.css";
import { connect } from "react-redux";

import { closeModal, openModal } from "../redux/actions/profileAction";

import Coffee from "../assets/logos/logo-main.svg";
import {
  Modal,
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Navbar,
  Image
} from "react-bootstrap";
import Login from "../components/Login";
import modal from "../assets/thumbnail/modal.jpg";
import FormRegister from "../components/Register";

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
    fontSize: "24px",
    marginRight: "50px"
  },

  specialLink: {
    backgroundColor: "#4C3A32",
    color: "#f5f1e8",
    fontSize: "24px",
    padding: "10px"
  },

  col: {
    width: "400px"
  },

  tabs: {
    flexDirection: "row"
  },

  img: {
    maxWidth: "350px"
  }
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 100px 0 75px;
`;

const LinkNav = styled.div`
  margin-top: 30px;
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "Sign",
      
    };
  }

 
  render() {
    return (
      <Navbar style={style.navStyle} collapseOnSelect sty="true">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Div>
            <div>
              <Navbar.Brand>
                <img
                  style={style.logo}
                  alt=""
                  src={Coffee}
                  width="300"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
            </div>
            <LinkNav>
              <NavLink to="/search" style={style.link}>
                Search
              </NavLink>
              {this.props.isAuthenticated ? (
                <NavLink to="/dashboard" style={style.link}>
                  Profile
                </NavLink>
              ) : (
                <NavLink
                  to="/"
                  onClick={this.props.openModal}
                  style={style.specialLink}
                >
                  Sign in
                </NavLink>
              )}
            </LinkNav>
          </Div>
        </Navbar.Collapse>
        <Modal
          size="lg"
          show={this.props.lgshow}
          onHide={this.props.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title />
          </Modal.Header>
          <Modal.Body>
            <Tabs
              style={style.tabs}
              defaultActiveKey="Sign"
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={key => this.setState({ key })}
            >
              <Tab eventKey="Sign" title="Sign in">
                <Container>
                  <Row>
                    <Col xs={12} md={7} style={style.col}>
                      <Image src={modal} alt="modal" style={style.img} />
                    </Col>
                    <Col xs={12} md={4} style={style.col}>
                      <Login />
                    </Col>
                  </Row>
                </Container>
              </Tab>

              <Tab eventKey="Sign up" title="Sign up">
                <Container>
                  <Row>
                    <Col xs={12} md={7} style={style.col}>
                      <Image src={modal} alt="modal" style={style.img} />
                    </Col>
                    <Col xs={12} md={4} style={style.col}>
                      <FormRegister />
                    </Col>
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </Navbar>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    isAuthenticated: store.profile.isAuthenticated,
    lgshow: store.profile.modal
  };
};

export default connect(
  mapStateToProps,
  { closeModal, openModal }
)(Navigation);
