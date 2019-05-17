import React from "react";
import { connect } from "react-redux";
import { handleFoamLevelSurvey } from "../redux/actions/handleSurvey";
import { withRouter } from "react-router-dom";

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

class FoamLevelSurvey extends React.Component {
  state = {
    foamLevel: {
      0: false,
      1: false,
      2: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.foamLevel;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = async e => {
    e.preventDefault();
    const foamLevelResult = [];

    await Object.keys(this.state.foamLevel).forEach((key, index) => {
      if (this.state.foamLevel[key]) {
        foamLevelResult.push(key);
      }
    });

    this.props.handleFoamLevelSurvey(foamLevelResult);
    this.props.history.push("/survey/5");
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.foamLevel).map((key, index) => {
      return (
        <div>
          <input
            key={index}
            onChange={this.handleCheckChieldElement}
            type="checkbox"
            checked={this.state.foamLevel[key]}
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
              <p>4 of 6</p>
              <p>Which foam level do you prefer?</p>
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
  return {
    foamLevel: state.survey.foamLevel
  };
};

export default connect(
  mapStateToProps,
  { handleFoamLevelSurvey }
)(withRouter(FoamLevelSurvey));
