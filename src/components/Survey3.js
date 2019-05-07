import React from "react"
import { ButtonToolbar, Button } from "react-bootstrap"

const style = {
  headerStyle: {
    justifyContent: "center",
    alignItem: "center"
  }

}

class Survey3 extends React.Component {
  render() {
  return (
      <div>
        <h1 style={style.headerStyle}>3 of 3</h1>
        <h3>Which flavors do you most enjoy in your coffee?</h3>
        <ButtonToolbar>
          <Button variant="outline-success">Brown Sugar</Button>
          <Button variant="outline-success">Hazelnut</Button>
          <Button variant="outline-success">Floral</Button>
          <Button variant="outline-success">Caramel</Button>
          <Button variant="outline-success">Chocolate</Button>
          <Button variant="outline-success">No Topping</Button>
          <Button variant="outline-light">Continue</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Survey3;