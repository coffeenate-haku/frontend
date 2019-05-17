import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { handleSugarLevelSurvey } from "../redux/actions/handleSurvey";

const style = {
  main: {
    backgroundColor: "#F4F0E5",
    padding: "50px 0 150px 0"
  },

  mobile: {
    backgroundColor: "#F5F5F5",
    width: "375px",
    height: "500px",
    margin: "auto"
  },

  container: {
    paddingTop: "100px",
    textAlign: "center",
    topMargin: "20px"
  },

  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "20px 0px"
  },

  button: {
    backgroundColor: "#4c3a32",
    fontColor: "#f4f0e5",
    width: "150px",
    margin: "15px"
  },

  continuebutton: {
    width: "100px",
    margin: "15px"
  }
};

class SurveyCoffee extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  state = {
    sweetnessTypes: {
      noSugar: false,
      lessSugar: false,
      sweet: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.sweetnessTypes;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = e => {
    e.preventDefault();
    const sugarLevelResults = [];

    Object.keys(this.state.sweetnessTypes).forEach((key, index) => {
      if (this.state.sweetnessTypes[key]) {
        sugarLevelResults.push(key);
      }
    });

    this.props.handleSugarLevelSurvey(sugarLevelResults)

    console.log(sugarLevelResults);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.sweetnessTypes).map((key, index) => {
      return (
        <div key={index}>
          <input
            onChange={this.handleCheckChieldElement}
            type="checkbox"
            checked={this.state.sweetnessTypes[key]}
            value={key}
          />
          {key}
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div style={style.main}>
          <div style={style.mobile}>
            <div style={style.container}>
              <p>2 of 6</p>
              <p>Which sweetness level you prefer the most?</p>
              <form onSubmit={this.onSubmit}>
                {this.renderCoffeeTypes()}
                <NavLink to="/survey/3">
                  <input
                    style={style.continuebutton}
                    type="submit"
                    value="Continue"
                    onClick={this.onSubmit}
                  />
                  skip
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    sugarLevel: state.survey.sugarLevel
  };
};

export default connect(
  mapStateToProps,
  { handleSugarLevelSurvey }
)(SurveyCoffee);
