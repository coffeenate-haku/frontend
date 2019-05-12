import React from "react";
// import { Card, Button } from "react-bootstrap";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";

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
      <div>
        <Card style={style.container}>
          <CardActionArea style={style.card}>
            <CardMedia variant="top" src="#" />
            <Card.Body>
              <Card.Title>You got espresso</Card.Title>
              <Card.Subtitle className="cardSubtitle">
                description
              </Card.Subtitle>
            </Card.Body>
          </CardActionArea>
        </Card>
        <div style={style.button}>
          <Button>See restaurant that matches you</Button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
