import React from "react"
import { ButtonToolbar, Button } from "react-bootstrap"

const style = {
  headerStyle: {
    justifyContent: "center",
    alignItem: "center"
  }

}

class Survey1 extends React.Component {
  render() {
  return (
      <div>
        <h1 style={style.headerStyle}>1 of 3</h1>
        <h3>How do you take your coffee?</h3>
        <ButtonToolbar>
          <Button variant="outline-success">Black</Button>
          <Button variant="outline-success">Cream</Button>
          <Button variant="outline-light">Continue</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Survey1;