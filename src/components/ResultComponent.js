import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getRecommendation } from "../redux/actions/getRecommendation";

const style = {
  container: {
    textAlign: "center",
    topMargin: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "50px"
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
}

class ResultComponent extends React.Component {
  // state = {
  //   coffeeRecommendations: []
  // };

  componentDidMount() {
   this.props.getRecommendation(this.props.id)
  }

  render() {
    const recommendations = this.props.recommendation.map(
      (item, index) => {
        return (
          <div style={style.container} key={index}>
            <Card style={style.card}>
              <Card.Img variant="top" src={item.image} alt="" />
              <Card.Body>
                <h5>You got {item.name}</h5>
                <p>{item.descriptions}</p>
              </Card.Body>
            </Card>
          </div>
        );
      }
    );
    return (
      <div>
        {recommendations}
        <div style={style.button}>
          <NavLink to="/search">
            <Button variant="primary">See restaurants that matches you</Button>
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  console.log(state);
  return {
    id: state.profile.id,
    recommendation: state.recommendation.recommendation
  };
};

export default connect(
  mapStatetoProps,
  { getRecommendation }
)(ResultComponent);
