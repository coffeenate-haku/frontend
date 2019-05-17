import React from "react";
import SearchNav from "./SearchNav";
import styled from "@emotion/styled";
import { Image } from "react-bootstrap";
import DefaultImage from "../assets/images/default-image.jpeg";
import MapImage from "../assets/thumbnail/map-direction.jpg";
import Footer from "./Footer";
import { getBestRestaurants } from "../utils/api";
import { getRestaurantbyDistance } from "../utils/api";
import { connect } from "react-redux";

const Main = styled.div`
  background-color: #f5f1e8;
  padding-bottom: 100px;
`;
const Jumbotron = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  padding: 100px 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Div = styled.div`
  width: 250px;
  margin: 0px 5px;
`;

const style = {
  img: {
    maxWidth: "800px",
    marginBottom: "50px"
  }
};

class DetailsComponent extends React.Component {
  componentDidMount() {
    getBestRestaurants().then(response => {
      this.setState({
        restaurants: response
      });
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
        <Main>
          <SearchNav />
          <Jumbotron>
            <Image src={DefaultImage} style={style.img} />
            <h3>Default Name</h3>
          </Jumbotron>
          <Details>
            <Div>
              <ul>
                <li>
                  <h6>Location</h6>
                  <p>021-1111-222</p>
                </li>
                <li>
                  <h6>Opening Hours</h6>
                  <p>08.00 am - 16.00 pm</p>
                </li>
                <li>
                  <h6>Address</h6>
                  <p>Jl. Jenggala II No.3, RT.2/RW.1, Selong</p>
                </li>
              </ul>
            </Div>
            <Div>
              <ul>
                <li>
                  <h6>Average Cost</h6>
                  <p>Rp. 50.000 - Rp. 100.000</p>
                </li>
                <li>
                  <h6>Type of Cuisine</h6>
                  <p>Western</p>
                </li>
              </ul>
            </Div>
            <Div>
              <ul>
                <li>
                  <h6>Get Direction</h6>
                  <img src={MapImage} width="200" alt="" />
                </li>
              </ul>
            </Div>
          </Details>
        </Main>

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStatetoProps = store => ({});

export default connect(
  mapStatetoProps,
  null
)(DetailsComponent);
