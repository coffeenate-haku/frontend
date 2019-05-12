import React from "react";
import ResultComponent from "./ResultComponent";
// import { Image } from "react-bootstrap";
// import Avatar from "../assets/thumbnail/Ellipse.png";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import HomeIcon from "@material-ui/icons/Home";
import LocationIcon from "@material-ui/icons/LocationOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RestoreIcon from "@material-ui/icons/Restore";
// import styled from "@emotion/styled";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { BottomNavigationAction } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const style = {
  div: {
    margin: "0 auto",
    alignItem: "center",
    paddingLeft: "500px"
  },

  container: {
    width: "400px",
    height: "650px",
    justifyContent: "center",
    alignItem: "center"
  },

  image: {
    paddingLeft: "120px",
    marginTop: "90px"
  },

  details: {
    paddingLeft: "50px",
    marginTop: "auto"
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
            <CardActionArea style={style.image}>
              <CardMedia
                width="150"
                image="../assets/thumbnail/Ellipse.png"
                title=""
              />
            </CardActionArea>
            <div style={style.details}>
              <h1>Hi, Zein Ahmad</h1>
              <p>zayn.ahmad@gmail.com</p>
            </div>
            <ResultComponent />

            <div style={style.menu}>
              <div style={style.icon}>
                <BottomNavigation component={RouterLink} to="/" showLabels>
                  <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                </BottomNavigation>
              </div>
              <div style={style.icon}>
                <div style={style.iconimg}>
                  <BottomNavigation
                    component={RouterLink}
                    to="/search"
                    showLabels
                  >
                    <BottomNavigationAction
                      label="Coffee"
                      icon={<LocationIcon />}
                    />
                  </BottomNavigation>
                </div>
              </div>
              <div style={style.icon}>
                <div style={style.iconimg}>
                  <BottomNavigation
                    component={RouterLink}
                    to="/search"
                    showLabels
                  >
                    <BottomNavigationAction
                      label="Favorites"
                      icon={<FavoriteIcon />}
                    />
                  </BottomNavigation>
                </div>
              </div>
              <div style={style.icon}>
                <div style={style.iconimg}>
                  <BottomNavigation
                    component={RouterLink}
                    to="/search"
                    showLabels
                  >
                    <BottomNavigationAction
                      label="Recent"
                      icon={<RestoreIcon />}
                    />
                  </BottomNavigation>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default DashboardComponent;
