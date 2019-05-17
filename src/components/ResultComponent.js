import React from "react"
import { Card, Button } from "react-bootstrap"

import { NavLink } from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"

const style = {
  container: {
    textAlign: "center",
    topMargin: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "50px"
  },

  card: {
    textAlign: "center",
    justifyContent: "center",
    width: "300px"
  },

  button: {
    paddingTop: "50px",
    textAlign: "center",
    justifyContent: "center"
  }
}

class ResultComponent extends React.Component {
  state = {
    coffeeRecommendations: []
  }

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/recommendations/${
          this.props.id
        }`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(results => {
        console.log(results)
        this.setState({
          coffeeRecommendations: results.data
        })
      })
  }

  render() {
    const recommendations = this.state.coffeeRecommendations.map(
      (item, index) => {
        return (
          <div style={style.container} key={index}>
            <Card style={style.card}>
              <Card.Img variant="top" src={item.image} alt="" />
              <Card.Body>
                <h5>You got {item.name}</h5>
                <p>{item.descriptions}</p>
              </Card.Body>
            </Card>
          </div>
        )
      }
    )
    return (
      <div>
        {recommendations}
        <div style={style.button}>
          <NavLink to="/search">
            <Button variant="primary">See restaurants that matches you</Button>
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = store => ({
  id: store.profile.id
})

export default connect(
  mapStatetoProps,
  null
)(ResultComponent)
