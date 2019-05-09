import React from "react"
import Coffee from "../assets/logos/logo-footer.svg"
import { Container, Image, Row, Col } from "react-bootstrap"
import styled from "@emotion/styled"

const style = {
  media: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "row"
  }
}
const Div = styled.div`
  background-color: #4c3a32;
  color: #f5f1e8;
  width: 100%;
  padding-bottom: 25px;
`
const P = styled.p`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 0px;
`
const Ul = styled.ul`
  list-style: none;
  padding: 0px;
  margin-right: 100px;
`

export default class Footer extends React.Component {
  render() {
    return (
      <Div>
        <Container>
          <Row>
            <Col md={5}>
              <Image width="300" src={Coffee} />
              <table>
                <thead>
                  <tr>
                    <th>Our Service</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Phone</td>
                    <td>: (021) 2345 678</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>: contact@cofeenate.com</td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col style={style.media} md={{ span: 4, offset: 3 }}>
              <div>
                <h5>Coffeenate</h5>
                <Ul>
                  <li>About Us</li>
                  <li>Investor</li>
                  <li>Contact</li>
                  <li>Careers</li>
                </Ul>
              </div>
              <div>
                <h5>Follow Us</h5>
                <Ul>
                  <li>Instagram</li>
                  <li>Youtube</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </Ul>
              </div>
            </Col>
          </Row>
          <P> Coffeenate © 2019</P>
        </Container>
      </Div>
    )
  }
}
