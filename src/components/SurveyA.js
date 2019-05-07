import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
  container: {
    textAlign: "center",
    topMargin: "20px"
  },

  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "20px 0px"
  },

  button: {
    width: "100px",
    margin: "15px"
  }
};

class Survey1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={style.container}>
          <h1>1 of 3</h1>
          <h3>How do you take your coffee?</h3>
        </div>
        <ButtonToolbar style={style.toolbar}>
          <Button style={style.button} variant="success">
            Black
          </Button>
          <Button style={style.button} variant="success">
            Cream
          </Button>
          <Link style={style.button} to="/survey/2">
            <Button variant="light">Continue</Button>
          </Link>
        </ButtonToolbar>
      </React.Fragment>
    );
  }
}

export default Survey1;
