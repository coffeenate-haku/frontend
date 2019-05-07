import React from "react"
import { ButtonToolbar, Button } from "react-bootstrap"

const style = {
  headerStyle: {
    justifyContent: "center",
    alignItem: "center"
    
  }

}

class Survey2 extends React.Component {
  render() {
  return (
    <React.Fragment>
      <div style={style.container}>
        <h1>2 of 3</h1>
        <h3>Which type of sweetness do you prefer?</h3>
      </div>
      <ButtonToolbar>
        <Button variant="success">Sugar</Button>
        <Button variant="success">Less Sugar</Button>
        <Button variant="light">Continue</Button>
      </ButtonToolbar>
    </React.Fragment>
    )
  }
}

export default Survey2;