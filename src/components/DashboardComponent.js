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
    paddingLeft: "500px",
    height: "100%",
    backgroundColor: "#f5f1e8"
  },

  container: {
    width: "400px",
    justifyContent: "center",
    alignItem: "center"
  },

  image: {
    paddingLeft: "140px",
    marginTop: "10px",
    marginBottom: "0px"
  },

  details: {
    paddingLeft: "70px",
    marginTop: "20px"
  },

  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "25px"
  },

  icon: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItem: "center",
    marginTop: "auto",
    width: "80px"
  }
};

class DashboardComponent extends React.Component {
  render() {
    return (
      <div style={style.div}>
        <Card style={style.container}>
          <div style={style.image}>
            <Image width="120" src={Avatar} alt="" />
          </div>
          <div style={style.details}>
            <p>{this.props.name}</p>
            <p>{this.props.email}</p>
          </div>
          <ResultComponent />
          <div style={style.menu}>
            <div style={style.icon}>
              <NavLink to="/">
                <div>
                  <Image width="30" src={HomeIcon} />
                </div>
                Home
              </NavLink>
            </div>

            <div style={style.icon}>
              <NavLink to="/search">
                <div style={style.iconimg}>
                  <Image width="30" src={Location} />
                </div>
                Find Coffee
              </NavLink>
            </div>
            <div style={style.icon}>
              <NavLink to="/">
                <div style={style.iconimg}>
                  <Image width="30" src={Heart} />
                </div>
                Favorite
              </NavLink>
            </div>
            <div style={style.icon}>
              <NavLink to="/">
                <div style={style.iconimg}>
                  <Image width="30" src={Account} />
                </div>
                Account
              </NavLink>
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
