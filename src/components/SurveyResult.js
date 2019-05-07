import React from "react"
import { Card, Button } from "react-bootstrap"

const style = {
  container: {
    textAlign: "center",
    topMargin: "20px"
  },

  card: {
    width: "20rem",
    textAlign: "center",
    justifyContent: "center"
  }

}
class SurveyResult extends React.Component {
  render() {
  return (
    <React.Fragment>
      <div style={style.container}>
        <Card style={style.card}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
            <Card.Title>You got espresso</Card.Title>
            <Card.Subtitle className="cardSubtitle">description</Card.Subtitle>
          </Card.Body>
        </Card>
        <Button>See restaurant that matches you</Button>
      </div>
    </React.Fragment>
    )
  }
}

export default SurveyResult;