import React from "react";
import { connect } from "react-redux";
import { handleBodyLevelSurvey } from "../redux/actions/handleSurvey";
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
    width: "100px",
    margin: "15px"
  }
};

const StyledOption = styled.div`
  padding: 10px 20px;
  background: brown;
  margin: 10px;
  color: #fff;
  width: 200px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: blue;
    cursor: pointer;
  }
`;

class BodyLevelSurvey extends React.Component {
  state = {
    bodyLevel: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.bodyLevel;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = async e => {
    e.preventDefault();
    const bodyLevelResult = [];

    await Object.keys(this.state.bodyLevel).forEach((key, index) => {
      if (this.state.bodyLevel[key]) {
        bodyLevelResult.push(key);
        console.log(bodyLevelResult);
      }
    });

    this.props.handleBodyLevelSurvey(bodyLevelResult);
    this.props.history.push("/survey/4");
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleOptionPressed = key => {
    this.setState({
      bodyLevel: {
        ...this.state.bodyLevel,
        [key]: !this.state.bodyLevel[key]
      }
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.bodyLevel).map((key, index) => {
      return (
        <StyledOption key={index} onClick={() => this.handleOptionPressed(key)}>
          <span>{key}</span>
          {this.state.bodyLevel[key] && (
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
              <p style={style.p}>3 of 6</p>
              <p>How light or bold do you like your coffee?</p>
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
    bodyLevel: state.survey.bodyLevel
  };
};

export default connect(
  mapStateToProps,
  { handleBodyLevelSurvey }
)(withRouter(BodyLevelSurvey));
