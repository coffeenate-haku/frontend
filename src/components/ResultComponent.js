import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getRecommendation } from "../redux/actions/getRecommendation";

const style = {
  main: {
    padding: "50px"
  },

  container: {
    textAlign: "right",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "50px"
  },

  card: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    width: "700px"
  },

  p: {
    textAlign: "justify"
  },

  button: {
    paddingTop: "50px",
    textAlign: "center",
    justifyContent: "center"
  },
  bgColor: {
    backgroundColor: "#4C3A32",
    padding: "10px 20px"
  }
};

class ResultComponent extends React.Component {
  // state = {
  //   coffeeRecommendations: []
  // };

  componentDidMount() {
    this.props.getRecommendation(this.props.id);
  }

  render() {
    const recommendations = this.props.recommendation.map((item, index) => {
      return (
        <div style={style.container} key={index}>
          <Card style={style.card}>
            <div>
              <Card.Img variant="top" width="300" src={item.image} alt="" />
            </div>
            <div>
              <Card.Body>
                <h4>You got {item.name}</h4>
                <p style={style.p}>{item.descriptions}</p>
              </Card.Body>
            </div>
          </Card>
        </div>
      );
    });
    return (
      <div style={style.main}>
        {recommendations}
        <div style={style.button}>
          <NavLink to="/search">
            <Button style={style.bgColor}>
              See restaurants that matches you
            </Button>
          </NavLink>
        </div>
      </div>
    );
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
