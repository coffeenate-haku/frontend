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
    width: "120px",
    margin: "15px"
  },

  continue: {
    width: "90px",
    margin: "15px",
    justifyContent: "center"
  }
};

class Survey3 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={style.container}>
          <h1>3 of 3</h1>
          <h3>Which flavors do you most enjoy in your coffee?</h3>
        </div>
        <ButtonToolbar style={style.toolbar}>
          <div>
            <Button style={style.button} variant="success">Brown Sugar</Button>
            <Button style={style.button} variant="success">Hazelnut</Button>
          </div>
          <div>
            <Button style={style.button} variant="success">Floral</Button>
            <Button style={style.button} variant="success">Caramel</Button>
          </div>
          <div>
            <Button style={style.button} variant="success">Chocolate</Button>
            <Button style={style.button} variant="success">No Topping</Button>
          </div>
          <Link style={style.button} to="/survey/result">
          <Button style={style.continue} variant="light">Continue</Button>
          </Link>
        </ButtonToolbar>
      </React.Fragment>
    );
  }
}

export default Survey3;
