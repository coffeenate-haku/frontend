// import React from "react";
// import { ButtonToolbar, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const style = {
//   main: {
//     backgroundColor: "#F4F0E5",
//     padding: "50px 0 100px 0"
//   },

//   mobile: {
//     backgroundColor: "#F5F5F5",
//     width: "375px",
//     height: "500px",
//     margin: "auto"
//   },

//   container: {
//     paddingTop: "100px",
//     textAlign: "center",
//     topMargin: "20px"
//   },

//   toolbar: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     margin: "20px 0px"
//   },

//   button: {
//     backgroundColor: "#4c3a32",
//     fontColor: "#f4f0e5",
//     width: "150px",
//     margin: "15px"
//   },

//   continuebutton: {
//     width: "150px",
//     margin: "15px"
//   }
// };

// class Survey1 extends React.Component {
//   render() {
//     return (
//       <div style={style.main}>
//         <div style={style.mobile}>
//           <div style={style.container}>
//             <p>1 of 3</p>
//             <h5>How do you take your coffee?</h5>
//           </div>
//           <ButtonToolbar style={style.toolbar}>
//             <Button style={style.button}>Black</Button>
//             <Button style={style.button}>Cream</Button>
//             <Link to="/survey/2">
//               <button style={style.continuebutton}>Continue</button>
//             </Link>
//           </ButtonToolbar>
//         </div>
//       </div>
//     );
//   }
// }

// export default Survey1;

// import React from "react";
// import { render } from "react-dom";
// import { FieldArray } from "formik";
// import Form from "react-bootstrap/Form";

// console.clear();

// const categories = [
//   { id: "black", name: "Black" },
//   { id: "cream", name: "Cream" },
//   { id: "sugar", name: "Sugar" },
//   { id: "decaf", name: "Decaf" }
// ];

// export const FormExample = () => (
//   <div>
//     <Form
//       initialValues={{ coffeeTypes: ["black"] }}
//       onSubmit={values =>
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//         }, 500)
//       }
//       render={({ values }) => (
//         <div>
//           <FieldArray
//             name="coffeeTypes"
//             render={arrayHelpers => (
//               <div>
//                 {categories.map(category => (
//                   <div key={category.id}>
//                     <label>
//                       <input
//                         name="coffeeTypes"
//                         type="checkbox"
//                         value={category.id}
//                         checked={values.coffeeTypes.includes(category.id)}
//                         onChange={e => {
//                           if (e.target.checked) arrayHelpers.push(category.id);
//                           else {
//                             const idx = values.coffeeTypes.indexOf(category.id);
//                             arrayHelpers.remove(idx);
//                           }
//                         }}
//                       />{" "}
//                       {category.name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             )}
//           />
//           <pre>{JSON.stringify(values, null, 2)}</pre>
//         </div>
//       )}
//     />
//     {["checkbox", "radio"].map(type => (
//       <div key={`default-${type}`} className="mb-3">
//         <Form.Check
//           type={type}
//           id={`default-${type}`}
//           label={`default ${type}`}
//         />

//         <Form.Check
//           disabled
//           type={type}
//           label={`disabled ${type}`}
//           id={`disabled-default-${type}`}
//         />
//       </div>
//     ))}{" "}
//     ;
//   </div>
// );

// const App = () => (
//   <div>
//     <FormExample />
//   </div>
// );

// render(<App />, document.getElementById("root"));

// import React from "react";

// class SurveyA extends React.Component {
//   state = {
//     isMJ: [],
//     isJB: false,
//     isDrake: false
//   };

//   toggleChangeMJ = () => {
//     this.setState(prevState => ({
//       isJB: !prevState.isMJ
//     }));
//   };

//   toggleChangeJB = () => {
//     this.setState(prevState => ({
//       //     this.setState, {array({ coffees }, console.log(this.state));
// //   };
//       isJB: !prevState.isJB.thisSetstate, {array({ coffees }
//     }));
//   };

//   toggleChangeDrake = () => {
//     this.setState(prevState => ({
//       isDrake: !prevState.isDrake.thisSetstate(this.state, { array: { $push: ["First"] } })
//     })
//   }

//   onSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div className="container">
//         <h2>Save the multiple checkbox values in React js</h2>
//         <hr />
//         <form onSubmit={this.onSubmit}>
//           <div className="form-check">
//             <label className="form-check-label">
//               <input
//                 type="checkbox"
//                 checked={this.state.isMJ}
//                 onChange={this.toggleChangeMJ}
//                 className="form-check-input"
//                 name="MJ"
//                 value={this.state.isMJ}
//               />
//               MJ
//             </label>
//           </div>
//           <div className="form-check">
//             <label className="form-check-label">
//               <input
//                 type="checkbox"
//                 checked={this.state.isJB}
//                 onChange={this.toggleChangeJB}
//                 className="form-check-input"
//                 name="JB"
//                 value={this.state.isJB}
//               />
//               JB
//             </label>
//           </div>
//           <div className="form-check">
//             <label className="form-check-label">
//               <input
//                 type="checkbox"
//                 checked={this.state.isDrake}
//                 onChange={this.toggleChangeDrake}
//                 className="form-check-input"
//                 name="Drake"
//                 value={this.state.isDrake}
//               />
//               Drake
//             </label>
//           </div>
//           <div className="form-group">
//             <button className="btn btn-primary">Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

import React from "react";
export default class SurveyCoffee extends React.Component {
  state = {
    // coffeeTypes: ["black", "cream", "sugar", "decaf"],

    coffeeTypes: {
      black: false,
      cream: false,
      sugar: false,
      decaf: false
    }
  };

  handleCheckChildElement = event => {
    let coffees = this.state.coffeeTypes;
    Object.keys(coffees).forEach(coffee => {
      if (coffee === event.target.value) coffees[coffee] = event.target.checked;
    });
    this.setState({ coffees }, console.log(this.state));
  };

  onSubmit = e => {
    e.preventDefault();
    Object.keys(this.state.coffeeTypes).forEach((key, index) => {
      if (this.state.coffeeTypes[key] === true) {
        console.log(key);
      }
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

// import update from "react";

// class List extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       array: []
//     };

//     setTimeout(this.addSome, 500);
//   }

//   addSome = () => {
//     this.setState(update(this.state, { array: { $push: ["First"] } }));
//     this.setState(update(this.state, { array: { $push: ["Second"] } }));
//     this.setState(update(this.state, { array: { $push: ["Third"] } }));
//   };

//   addSomeFixed = () => {
//     this.setState(state => update(state, { array: { $push: ["F"] } }));
//     this.setState(state => update(state, { array: { $push: ["S"] } }));
//     this.setState(state => update(state, { array: { $push: ["T"] } }));
//   };

//   render() {
//     const list = this.state.array.map((item, i) => {
//       return <li key={i}>{item}</li>;
//     });
//     console.log(this.state);

//     return (
//       <div className="list">
//         <button onClick={this.addSome}>add three</button>
//         <button onClick={this.addSomeFixed}>add three (fixed)</button>
//         <ul>{list}</ul>
//       </div>
//     );
//   }
// }

// export default List;

// ReactDOM.render(<List />, document.getElementById('app'));
