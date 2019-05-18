import React from "react";
import { connect } from "react-redux";
import { handleFlavorsLevelSurvey } from "../redux/actions/handleSurvey";
import { withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const axios = require("axios");

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
    this.setState({ coffees });
  };

  onSubmit = async e => {
    e.preventDefault();
    console.log(this.props.surveyResults)
    axios
      .put(
        `${process.env.REACT_APP_API_COFFEE_RECOMMENDATION}/${
          this.props.userId
        }`,
        {
          headers: {
            Authorization: `Bearer ${this.props.userToken}`,
          }
        },
        `${this.props.surveyResults}`,
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));

    const flavorsResult = [];

    await Object.keys(this.state.flavors).forEach((key, index) => {
      if (this.state.flavors[key]) {
        flavorsResult.push(key);
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

  handleOptionPressed = key => {
    this.setState({
      flavors: {
        ...this.state.flavors,
        [key]: !this.state.flavors[key]
      }
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.flavors).map((key, index) => {
      return (
        <StyledOption key={index} onClick={() => this.handleOptionPressed(key)}>
          <span>{key}</span>
          {this.state.flavors[key] && <FontAwesomeIcon icon={faCheckCircle} />}
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
              <p style={style.p}>6 of 6</p>
              <p>Which flavors do you prefer with your coffee?</p>
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
