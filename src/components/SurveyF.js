import React from "react";
import { connect } from "react-redux";
import { handleFlavorsLevelSurvey } from "../redux/actions/handleSurvey";
import { withRouter } from "react-router-dom";
const axios = require("axios");

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

  onSubmit = async e => {
    e.preventDefault();

    axios
      .put(
        `${process.env.REACT_APP_API_COFFEE_RECOMMENDATION}/${
          this.props.userId
        }`,
        `${this.props.surveyResults}`,
        {
          headers: {
            Authorization: `Bearer ${this.props.userToken}`
          }
        }
      )
      .then(response => {
        console.log(response);
      });

    const flavorsResult = [];

    await Object.keys(this.state.flavors).forEach((key, index) => {
      if (this.state.flavors[key]) {
        flavorsResult.push(key);
        console.log(flavorsResult);
      }
    });

    this.props.handleFlavorsLevelSurvey(flavorsResult);
    this.props.history.push("/result");
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.flavors).map((key, index) => {
      return (
        <div key={index}>
          <input
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
              <p>Which flavors do you prefer with your coffee?</p>
              <form onSubmit={this.onSubmit}>
                {this.renderCoffeeTypes()}
                <input
                  style={style.continuebutton}
                  type="submit"
                  value="Continue"
                  onClick={this.onSubmit}
                />
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
    flavors: state.survey.flavors,
    surveyResults: state.survey,
    userId: state.profile.id,
    userToken: state.profile.token
  };
};

export default connect(
  mapStateToProps,
  { handleFlavorsLevelSurvey }
)(withRouter(FlavorsSurvey));
