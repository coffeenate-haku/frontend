import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
  main: {
    backgroundColor: "#F4F0E5",
    padding: "50px 0 100px 0"
  },

  mobile: {
    backgroundColor: "#F5F5F5",
    width: "375px",
    height: "500px",
    margin: "auto"
  },

  container: {
    paddingTop: "100px",
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
    backgroundColor: "#4c3a32",
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
      <div style={style.main}>
        <div style={style.mobile}>
          <div style={style.container}>
            <p>3 of 3</p>
            <h5>Which flavors do you most enjoy in your coffee?</h5>
          </div>
          <ButtonToolbar style={style.toolbar}>
            <div>
              <Button style={style.button}>Brown Sugar</Button>
              <Button style={style.button}>Hazelnut</Button>
            </div>
            <div>
              <Button style={style.button}>Floral</Button>
              <Button style={style.button}>Caramel</Button>
            </div>
            <div>
              <Button style={style.button}>Chocolate</Button>
              <Button style={style.button}>No Topping</Button>
            </div>
            <Link style={style.button} to="/result">
              <Button style={style.continue} variant="light">
                Continue
              </Button>
            </Link>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Survey3;
