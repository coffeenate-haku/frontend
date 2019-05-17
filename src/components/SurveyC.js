import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import {handleBodyLevelSurvey} from '../redux/actions/handleSurvey'

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
  state = {
    bodyTypes: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.bodyTypes;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = e => {
    e.preventDefault();
    const coffeeArray = [];

    Object.keys(this.state.bodyTypes).forEach((key, index) => {
      if (this.state.bodyTypes[key]) {
        coffeeArray.push(key);
      }
    });

    this.props.handleBodyLevelSurvey(coffeeArray)

    console.log(coffeeArray);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.bodyTypes).map((key, index) => {
      return (
        <div>
          <input
            key={index}
            onChange={this.handleCheckChieldElement}
            type="checkbox"
            checked={this.state.bodyTypes[key]}
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
              <p>3 of 6</p>
              <p>How light or bold do you like your cofee?</p>
              <form onSubmit={this.onSubmit}>
                {this.renderCoffeeTypes()}
                <NavLink to="/survey/4">
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
  console.log(state)
  return{
    bodyLevel: state.survey.bodyLevel 
  }
}

export default connect(mapStateToProps, {handleBodyLevelSurvey})(SurveyCoffee)
