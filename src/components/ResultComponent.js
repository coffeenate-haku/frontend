import React from "react";
import { Card, Button } from "react-bootstrap";

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
    padding: "20px",
    textAlign: "center",
    justifyContent: "center"
  }
};
class ResultComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={style.container}>
          <Card style={style.card}>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>You got espresso</Card.Title>
              <Card.Subtitle className="cardSubtitle">
                description
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div style={style.button}>
          <Button>See restaurant that matches you</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default ResultComponent;
