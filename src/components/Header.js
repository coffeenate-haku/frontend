import React from "react"
import Coffee from "../assets/images/jumbotron-image.jpg"
import Image from "react-bootstrap/Image"
import { NavLink } from "react-router-dom"

const style = {
  jumbotron: {
    width: "100%",
    height: "600px",
    backgroundColor: "#f5f1e8",
    margin: "0px",
    padding: "0px 200px",
    display: "flex",
    justifyContent: "space-around"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    height: "500px",
    color: "#4C3A32"
  },
  link: {
    textAlign: "center",
    width: "200px",
    backgroundColor: "#4C3A32",
    color: "#f5f1e8",
    fontSize: "24px",
    marginTop: "50px",
    padding: "10px"
  }
}

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div style={style.jumbotron}>
        <div style={style.item}>
          <h1>Find your</h1>
          <h1>Coffee Match</h1>
          <NavLink to="/survey/1" style={style.link}>
            Take Survey
          </NavLink>
        </div>
        <div style={style.item}>
          <Image width="500" src={Coffee} alt="" />
        </div>
      </div>
    )
  }
}
