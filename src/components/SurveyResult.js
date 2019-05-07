import React from "react"
import { Card, Button } from "react-bootstrap"

class SurveyResult extends React.Component {
  render() {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
            <Card.Title>You got espresso</Card.Title>
            <Card.Subtitle className="cardSubtitle">description</Card.Subtitle>
          </Card.Body>
        </Card>
        <Button>See restaurant that matches you</Button>
      </div>
    )
  }
}

export default SurveyResult;