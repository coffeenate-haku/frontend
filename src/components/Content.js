import React from "react";
import How1 from "../assets/thumbnail/how-it-works1.png";
import How2 from "../assets/thumbnail/how-it-works2.png";
import How3 from "../assets/thumbnail/how-it-works3.png";
import What1 from "../assets/thumbnail/what-is-1.png";
import What2 from "../assets/thumbnail/what-is-2.png";
import What3 from "../assets/thumbnail/what-is-3.png";

const style = {
  container: {
    margin: "50px 0px"
  },

  heading: {
    textAlign: "center",
    color: "#4C3A32"
  },

  content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },

  item: {
    textAlign: "center",
    width: "250px",
    margin: "50px"
  },

  desc: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
    color: "#4C3A32"
  },

  paragraph: {
    fontSize: "20px",
    height: "100px",
    color: "#4C3A32"
  }
};

export default class Content extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <h2 style={style.heading}>Why Coffeenate?</h2>
        <div style={style.content}>
          <div style={style.item}>
            <img src={How1} alt="" />
            <div style={style.desc}>
              <h3>Good Coffee Only</h3>
              <p style={style.paragraph}>
                Our recommendation system tells you the best coffee around
              </p>
            </div>
          </div>
          <div style={style.item}>
            <img src={How2} alt="" />
            <div style={style.desc}>
              <h3>No More Wasted Money</h3>
              <p style={style.paragraph}>
                You no longer waste your money on a cup of coffee you dont like
              </p>
            </div>
          </div>
          <div style={style.item}>
            <img src={How3} alt="" />
            <div style={style.desc}>
              <h3>Find Your Ambience</h3>
              <p style={style.paragraph}>
                Easier to find a place to enjoy your type coffee
              </p>
            </div>
          </div>
        </div>
        <h2 style={style.heading}>How it Works?</h2>
        <div style={style.content}>
          <div style={style.item}>
            <img src={What1} alt="" />
            <div style={style.desc}>
              <h3>Fill out the Survey</h3>
              <p style={style.paragraph}>
                Take our survey to know what coffee is your type
              </p>
            </div>
          </div>
          <div style={style.item}>
            <img src={What2} alt="" />
            <div style={style.desc}>
              <h3>Find The Nearest Coffee</h3>
              <p style={style.paragraph}>
                Our search engine will find similar type of your coffee
              </p>
            </div>
          </div>
          <div style={style.item}>
            <img src={What3} alt="" />
            <div style={style.desc}>
              <h3>Save Your Result</h3>
              <p style={style.paragraph}>Get matched with your coffee type</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
