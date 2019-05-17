import React from "react";
import { connect } from "react-redux";
import { handleFoamLevelSurvey } from "../redux/actions/handleSurvey";
import { withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const style = {
  main: {
    backgroundColor: "#F4F0E5",
    padding: "50px 0 150px 0"
  },

  mobile: {
    backgroundColor: "#FFFFFF",
    width: "375px",
    minHeight: "500px",
    margin: "auto"
  },

  container: {
    padding: "50px 0px",
    textAlign: "center",
    topMargin: "20px",
    fontSize: "24px"
  },

  p: {
    fontSize: "16px"
  },

  form: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
  },

  text: {
    textAlign: "left",
    margin: "0 auto"
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
    width: "200px",
    margin: "10px"
  }
};

const StyledOption = styled.div`
  padding: 10px 20px;
  background: #f4f0e5;
  margin: 10px;
  color: #4c3a32;
  width: 200px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: rgb(122, 79, 59);
    cursor: pointer;
    color: #f4f0e5;
  }
`;

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
        console.log(foamLevelResult);
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

  handleOptionPressed = key => {
    this.setState({
      foamLevel: {
        ...this.state.foamLevel,
        [key]: !this.state.foamLevel[key]
      }
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.foamLevel).map((key, index) => {
      return (
        <StyledOption key={index} onClick={() => this.handleOptionPressed(key)}>
          <span>{key}</span>
          {this.state.foamLevel[key] && (
            <FontAwesomeIcon icon={faCheckCircle} />
          )}
        </StyledOption>
      );
    });
  }

  render() {
    return (
      <React.Fragment key="">
        <div style={style.main}>
          <div style={style.mobile}>
            <div style={style.container}>
              <p style={style.p}>4 of 6</p>
              <p>Which foam level do you prefer?</p>
              <div style={style.form}>
                <form style={style.text} onSubmit={this.onSubmit}>
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
