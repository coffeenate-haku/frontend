import React from "react";
import ResultNav from "../components/ResultNav";

import ResultComponent from "../components/ResultComponent";

export default class Result extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResultNav />
        <ResultComponent />
      </React.Fragment>
    )
  }
}
