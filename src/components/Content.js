import React from "react";
import How1 from "../assets/thumbnail/how-it-works1.png";
import How2 from "../assets/thumbnail/how-it-works2.png";
import How3 from "../assets/thumbnail/how-it-works3.png";
import What1 from "../assets/thumbnail/what-is-1.png";
import What2 from "../assets/thumbnail/what-is-2.png";
import What3 from "../assets/thumbnail/what-is-3.png";

const style = {
  container: {
    justifyContent: "center",
    margin: "50px 0px",
    display: "flex"
  },

  heading: {
    textAlign: "center",
    color: "#4C3A32",
    marginTop: "50px"
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
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 1,
          title: "Why Coffeenate?",
          content: [
            {
              image: How1,
              title: "Good Coffee Only",
              text: "Our recommendation system tells you the best coffee around"
            },
            {
              image: How2,
              title: "No More Wasted Money",
              text:
                "You no longer waste your money on a cup of coffee you dont like"
            },
            {
              image: How3,
              title: "Find Your Ambience",
              text: "Easier to find a place to enjoy your type coffee"
            }
          ]
        },
        {
          id: 2,
          title: "How it Works?",
          content: [
            {
              image: What1,
              title: "Fill out the Survey",
              text: "Take our survey to know what coffee is your type"
            },
            {
              image: What2,
              title: "Find The Nearest Coffee",
              text: "Our search engine will find similar type of your coffee"
            },
            {
              image: What3,
              title: "Save Your Result",
              text: "Get matched with your coffee type"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.articles.map((article, index) => {
          return (
            <React.Fragment>
              <h2 style={style.heading}>{article.title}</h2>
              <div style={style.container} id={article.id} key={index}>
                {article.content.map((item, i) => {
                  return (
                    <div style={style.content} key={i}>
                      <div style={style.item}>
                        <img src={item.image} alt="" />
                        <div style={style.desc}>
                          <h3>{item.title}</h3>
                          <p style={style.paragraph}>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
