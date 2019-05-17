import React from "react";
import { Link } from "react-router-dom";

import ResultNav from "../components/ResultNav";
import styled from "@emotion/styled";
import { getBestRestaurants } from "../utils/api";
import { getRestaurantbyDistance } from "../utils/api";
import { connect } from "react-redux";

const Container = styled.div`
  background-color: #f5f1e8;
  margin: auto 0px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin: 20px 5px;
  padding: 50px 30px 0px 30px;
  text-align: center;
  border-radius: 30px;
  width: 275px;
`;

const Images = styled.div`
  height: 150px;
`;

const Img = styled.img`
  width: 180px;
  height: 100%;
`;

const H4 = styled.h4`
  margin: 0px 0px 0px 100px;
  color: #4c3a32;
`;

const H44 = styled.h4`
  margin-left: 100px;
  color: #4c3a32;
`;

const H5 = styled.h5`
  margin-top: 20px;
  color: #4c3a32;
`;

class Search extends React.Component {
  state = {
    restaurants: [],
    nearestRestaurants: [],
    searchRestaurants: []
  };

  componentDidMount() {
    const query = this.props.recommendation.map(data => data.name);

    const joinQuery = query.join(" ");

    getBestRestaurants(joinQuery)
      .then(response => {
        console.log(response);
        this.setState({
          restaurants: response
        })
      })
      .catch(error => {
        console.log(error);
      });

    getRestaurantbyDistance().then(response => {
      this.setState({
        nearestRestaurants: response
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <ResultNav />
          <H44>Recommendation</H44>
          <Div>
            {this.state.restaurants.map((data, index) => {
              return (
                <Card key={index}>
                  <Link to="/details">
                    <Images>
                      <Img src={data.restaurant.thumb} alt="" />
                    </Images>
                  </Link>
                  <H5>{data.restaurant.name}</H5>
                  <p>Rating : {data.restaurant.user_rating.aggregate_rating}</p>
                </Card>
              );
            })}
          </Div>
        </Container>

        <Container>
          <H4>Best Seller</H4>
          <Div>
            {this.state.restaurants.map((item, index) => {
              return (
                <Card key={index}>
                  <Link to="/details" onClick={item.restaurant}>
                    <Images>
                      <Img src={item.restaurant.thumb} alt="" />
                    </Images>
                  </Link>
                  <H5>{item.restaurant.name}</H5>

                  <p>
                    Rating: {item.restaurant.user_rating.aggregate_rating}/5
                  </p>
                </Card>
              );
            })}
          </Div>
        </Container>

        <Container>
          <H44>Nearest</H44>
          <Div>
            {this.state.nearestRestaurants.map((item, index) => {
              return (
                <Card key={index}>
                  <Link to="/details">
                    <Images>
                      <Img src={item.restaurant.thumb} alt="" />
                    </Images>
                  </Link>
                  <H5>{item.restaurant.name}</H5>

                  <p>
                    Rating: {item.restaurant.user_rating.aggregate_rating}/5
                  </p>
                </Card>
              );
            })}
          </Div>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    recommendation: state.recommendation.recommendation
  };
};

export default connect(
  mapStateToProps,
  null
)(Search);
