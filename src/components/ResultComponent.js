import React from "react";
import { Card, Button } from "react-bootstrap";
import coffee from "../assets/images/espresso.jpg";
import { NavLink } from "react-router-dom";

const style = {
  container: {
    textAlign: "center",
    topMargin: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "150px"
  },

  card: {
    textAlign: "center",
    justifyContent: "center",
    width: "300px"
  },

  button: {
    paddingTop: "50px",
    textAlign: "center",
    justifyContent: "center"
  }
};
class ResultComponent extends React.Component {
  render() {
    return (
      <div>
        <div style={style.container}>
          <Card style={style.card}>
            <Card.Img variant="top" src={coffee} />
            <Card.Body>
              <h5>You got espresso</h5>
              <p>Description</p>
            </Card.Body>
          </Card>
        </div>
        <div style={style.button}>
          <NavLink to="/search">
            <Button variant="primary">See restaurants that matches you</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
