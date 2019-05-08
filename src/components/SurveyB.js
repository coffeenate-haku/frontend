import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
  container: {
    paddingTop: "150px",
    textAlign: "center",
  },

  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "20px 0px"
  },

  button: {
    width: "150px",
    margin: "15px"
  }
};

class Survey2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={style.container}>
          <h1>2 of 3</h1>
          <h3>Which type of sweetness do you prefer?</h3>
        </div>
        <ButtonToolbar style={style.toolbar}>
          <Button style={style.button} variant="success">Sugar</Button>
          <Button style={style.button} variant="success">Less Sugar</Button>
          <Link to="/survey/3">
            <Button style={style.button} variant="light">Continue</Button>
          </Link>
        </ButtonToolbar>
      </React.Fragment>
    );
  }
}

export default Survey2;
