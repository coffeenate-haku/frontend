import React from "react";
import { handleHotColdSurvey } from "../redux/actions/handleSurvey";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const style = {
  main: {
    backgroundColor: "#F4F0E5",
    padding: "50px 0 150px 0",
    height: "100%"
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

class HotColdSurvey extends React.Component {
  state = {
    hotCold: {
      hot: false,
      cold: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.hotCold;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = e => {
    e.preventDefault();
    const hotColdResult = [];

    Object.keys(this.state.hotCold).forEach((key, index) => {
      if (this.state.hotCold[key]) {
        hotColdResult.push(key);
      }
    });

    this.props.handleHotColdSurvey(hotColdResult); // put props here
    console.log(hotColdResult);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.hotCold).map((key, index) => {
      return (
        <div>
          <input
            key={index}
            onChange={this.handleCheckChieldElement}
            type="checkbox"
            checked={this.state.hotCold[key]}
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
              <p>1 of 6</p>
              <p>How do you take your coffee?</p>
              <form onSubmit={this.onSubmit}>
                {this.renderCoffeeTypes()}
                <NavLink to="/survey/2">
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
  // console.log(state);
  return {
    hotCold: state.survey.hotCold
  }; //global state diubah menjadi props supaya bisa dipake di component
};

export default connect(
  mapStateToProps,
  { handleHotColdSurvey }
)(HotColdSurvey); //state, action, classname
