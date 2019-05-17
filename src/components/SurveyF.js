import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { handleFlavors } from "../redux/actions/handleSurvey";

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

class FlavorsSurvey extends React.Component {
  state = {
    flavors: {
      earthy: false,
      chocolate: false,
      brownSugar: false,
      toastedNut: false,
      vanilla: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.flavors;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = e => {
    e.preventDefault();
    const flavorsResult = [];

    Object.keys(this.state.flavors).forEach((key, index) => {
      if (this.state.flavors[key]) {
        flavorsResult.push(key);
      }
    });

    this.props.handleFlavors(flavorsResult);
    console.log(flavorsResult);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.flavors).map((key, index) => {
      return (
        <div>
          <input
            key={index}
            onChange={this.handleCheckChieldElement}
            type="checkbox"
            checked={this.state.flavors[key]}
            value={key}
          />
          {key}
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment key="">
        <div style={style.main}>
          <div style={style.mobile}>
            <div style={style.container}>
              <p>6 of 6</p>
              <p>Which flavor do you prefer with your coffee?</p>
              <form onSubmit={this.onSubmit}>
                {this.renderCoffeeTypes()}
                <NavLink to="/result">
                  <input
                    style={style.continuebutton}
                    type="submit"
                    value="Continue"
                    onClick={this.onSubmit}
                  />
                  see result
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
  return {
    flavors: state.survey.flavors
  };
};

export default connect(
  mapStateToProps,
  { handleFlavors }
)(FlavorsSurvey);
