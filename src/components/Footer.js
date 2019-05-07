import React from "react";
import Coffee from "../assets/logos/logo-footer.svg";
import { Container, Image, Row, Col } from "react-bootstrap";

const style = {
  container: {
    backgroundColor: "#4C3A32",
    color: "#f5f1e8",
    width: "100%",
    margin: "0px",
    paddingBottom: "50px"
  },
  paragraph: {
    marginTop: "20px",
    textAlign: "center"
  },
  list: {
    listStyle: "none",
    padding: "0px",
    marginRight: "100px"
  },
  media: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "row"
  }
};

export default class Footer extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <Container>
          <Row>
            <Col md={5}>
              <Image width="300" src={Coffee} />
              <table>
                <tr>
                  <th>Our Service</th>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>: (021) 2345 678</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: contact@cofeenate.com</td>
                </tr>
              </table>
            </Col>
            <Col style={style.media} md={{ span: 4, offset: 3 }}>
              <div>
                <h5>Coffeenate</h5>
                <ul style={style.list}>
                  <li>About Us</li>
                  <li>Investor</li>
                  <li>Contact</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h5>Follow Us</h5>
                <ul style={style.list}>
                  <li>Instagram</li>
                  <li>Youtube</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <p style={style.paragraph}> Coffeenate © 2019</p>
      </div>
    );
  }
}
