import React from "react";
import ResultComponent from "./ResultComponent";
import { Image, Card } from "react-bootstrap";
import Avatar from "../assets/thumbnail/Ellipse.png";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/thumbnail/home.png";
import Location from "../assets/thumbnail/location.png";
import Heart from "../assets/thumbnail/heart.png";
import Account from "../assets/thumbnail/account.png";
import { connect } from "react-redux";

const style = {
  div: {
    margin: "0 auto",
    alignItem: "center",
    paddingLeft: "500px"
  },

  container: {
    width: "400px",
    justifyContent: "center",
    alignItem: "center"
  },

  image: {
    paddingLeft: "120px",
    marginTop: "90px"
  },

  details: {
    paddingLeft: "70px",
    marginTop: "80px"
  },

  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "50px"
  },

  icon: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItem: "center",
    width: "80px"
  }
};

class DashboardComponent extends React.Component {
  render() {
    return (
      <div style={style.div}>
        <Card style={style.container}>
          <div>
            <div style={style.image}>
              <Image width="150" src={Avatar} alt="" />
            </div>
            <div style={style.details}>
              <h1>Hi, {this.props.name}</h1>
              <p>{this.props.email}</p>
            </div>
            <ResultComponent />
            <div style={style.menu}>
              <div style={style.icon}>
                <div>
                  <Image width="30" src={HomeIcon} />
                </div>
                <NavLink to="/">Home</NavLink>
              </div>
              <div style={style.icon}>
                <div style={style.iconimg}>
                  <Image width="30" src={Location} />
                </div>
                <NavLink to="/search">Find Coffee</NavLink>
              </div>
              <div style={style.icon}>
                <div style={style.iconimg}>
                  <Image width="30" src={Heart} />
                </div>
                <NavLink to="/">Favorite</NavLink>
              </div>
              <div style={style.icon}>
                <div style={style.iconimg}>
                  <Image width="30" src={Account} />
                </div>
                <NavLink to="/">Account</NavLink>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  name: store.profile.name,
  email: store.profile.email
});

export default connect(
  mapStateToProps,
  null
)(DashboardComponent);
