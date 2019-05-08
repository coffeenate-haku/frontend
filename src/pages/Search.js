import React from "react";
import SearchNav from "../components/SearchNav";
import DefaultImg from "../assets/images/default-image.jpeg";
import Rating from "../assets/thumbnail/five-star.png";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #f5f1e8;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin: 50px 20px;
  padding: 30px 30px 0px 30px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0px 0px 30px 0px rgba(76, 58, 50, 0.9);
`;

const Img = styled.img`
  width: 200px;
`;

const Heading = styled.h4`
  margin: 50px 0px 0px 100px;
`;

const best = [
  {
    image: DefaultImg,
    title: "Default Title",
    rating: Rating
  },
  {
    image: DefaultImg,
    title: "Default Title",
    rating: Rating
  },
  {
    image: DefaultImg,
    title: "Default Title",
    rating: Rating
  },
  {
    image: DefaultImg,
    title: "Default Title",
    rating: Rating
  }
];

const Search = props => {
  return (
    <Container>
      <SearchNav />
      <Heading>Best Seller</Heading>
      <Div>
        {best.map((best, index) => {
          return (
            <Card key={index}>
              <Img src={best.image} alt="" />
              <h5>{best.title}</h5>
              <Img src={best.rating} alt="" />
            </Card>
          );
        })}
      </Div>
    </Container>
  );
};

export default Search;
