import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  main: {
    backgroundColor: "#F4F0E5",
    padding: "50px 0 100px 0"
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

export default class SurveyCoffee extends React.Component {
  state = {
    milkTypes: {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.foamTypes;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = e => {
    e.preventDefault();
    const coffeeArray = [];

    Object.keys(this.state.foamTypes).forEach((key, index) => {
      if (this.state.foamTypes[key]) {
        coffeeArray.push(key);
      }
    });

    console.log(coffeeArray);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.foamTypes).map((key, index) => {
      return (
        <div>
          <input
            key={index}
            onChange={this.handleCheckChieldElement}
            type="checkbox"
            checked={this.state.foamTypes[key]}
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
              <p>5 of 6</p>
              <p>Which milk level do you prefer?</p>
              <NavLink to="/survey/5">
                <form onSubmit={this.onSubmit}>
                  {this.renderCoffeeTypes()}
                  <input
                    style={style.continuebutton}
                    type="submit"
                    value="Continue"
                    onClick={this.onSubmit}
                  />
                </form>
              </NavLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
