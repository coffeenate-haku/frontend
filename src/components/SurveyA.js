import React from "react";

export default class SurveyCoffee extends React.Component {
  state = {
    // coffeeTypes: ["black", "cream", "sugar", "decaf"]

    coffeeTypes: {
      black: false,
      cream: false,
      sugar: false,
      decaf: false
    }
  };

  handleCheckChieldElement = event => {
    let coffees = this.state.coffeeTypes;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = e => {
    e.preventDefault();
    const coffeeArray = [];

    Object.keys(this.state.coffeeTypes).forEach((key, index) => {
      if (this.state.coffeeTypes[key]) {
        coffeeArray.push(key);
      }
    });

    console.log(coffeeArray);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderCoffeeTypes() {
    return Object.keys(this.state.coffeeTypes).map((key, index) => {
      return (
        <div>
          <input
            key={index}
            onChange={this.handleCheckChieldElement}
            type="checkbox"
            checked={this.state.coffeeTypes[key]}
            value={key}
          />
          {key}
        </div>
      );
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.renderCoffeeTypes()}
        <input type="submit" value="Continue" onClick={this.onSubmit} />
      </form>
    );
  }
}
