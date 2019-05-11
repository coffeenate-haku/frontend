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
    fontColor: "#f4f0e5",
    width: "150px",
    margin: "15px"
  },

  continuebutton: {
    width: "150px",
    margin: "15px"
  }
};

class Survey1 extends React.Component {
  render() {
    return (
      <div style={style.main}>
        <div style={style.mobile}>
          <div style={style.container}>
            <p>1 of 3</p>
            <h5>How do you take your coffee?</h5>
          </div>
          <ButtonToolbar style={style.toolbar}>
            <Button style={style.button}>Black</Button>
            <Button style={style.button}>Cream</Button>
            <Link to="/survey/2">
              <button style={style.continuebutton}>Continue</button>
            </Link>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Survey1;
