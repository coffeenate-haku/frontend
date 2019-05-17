import React from "react";
import { connect } from "react-redux";
import { handleSugarLevelSurvey } from "../redux/actions/handleSurvey";
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

class SugarLevelSurvey extends React.Component {
  state = {
    sugarLevel: {
      noSugar: false,
      lessSugar: false,
      sweet: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.sugarLevel;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = async e => {
    e.preventDefault();
    const sugarLevelResult = [];

    await Object.keys(this.state.sugarLevel).forEach((key, index) => {
      if (this.state.sugarLevel[key]) {
        sugarLevelResult.push(key);
      }
    });

    await this.props.handleSugarLevelSurvey(sugarLevelResult);
    this.props.history.push("/survey/3");
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.sugarLevel).map((key, index) => {
      return (
        <div>
          <input
            key={index}
            onChange={this.handleCheckChieldElement}
            type="checkbox"
            checked={this.state.sugarLevel[key]}
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
              <p>2 of 6</p>
              <p>Which sugar level you prefer the most?</p>
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
    sugarLevel: state.survey.sugarLevel
  };
};

export default connect(
  mapStateToProps,
  { handleSugarLevelSurvey }
)(withRouter(SugarLevelSurvey));
