import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
  headerStyle: {
    justifyContent: "center",
    alignItem: "center"
  }
};

class Survey3 extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style.headerStyle}>3 of 3</h1>
        <h3>Which flavors do you most enjoy in your coffee?</h3>
        <ButtonToolbar>
          <Button variant="success">Brown Sugar</Button>
          <Button variant="success">Hazelnut</Button>
          <Button variant="success">Floral</Button>
          <Button variant="success">Caramel</Button>
          <Button variant="success">Chocolate</Button>
          <Button variant="success">No Topping</Button>
          <Link style={style.button} to="/survey/result">
            <Button variant="light">Continue</Button>
          </Link>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Survey3;
