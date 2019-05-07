import React from "react"
import { ButtonToolbar, Button } from "react-bootstrap"

const style = {
  headerStyle: {
    justifyContent: "center"
  }

}

class Survey2 extends React.Component {
  render() {
  return (
      <div>
        <h1 style={style.headerStyle}>2 of 3</h1>
        <h3>Which type of sweetness do you prefer?</h3>
        <ButtonToolbar>
          <Button variant="outline-success">Sugar</Button>
          <Button variant="outline-success">Less Sugar</Button>
          <Button variant="outline-light">Continue</Button>
        </ButtonToolbar>
      </div>
    )
  }
}