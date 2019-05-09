import React from "react"
import axios from "axios"

class FormRegister extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const API_URL = `http://localhost:5210/users/register`
    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios
      .post(API_URL, user)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Signup</h1>
        <fieldset>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onChange={this.handleChange}
          />

          <input
            placeholder="Username"
            type="text"
            name="username"
            onChange={this.handleChange}
          />

          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
          />

          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <input type="submit" value="Register" />
        </fieldset>
      </form>
    )
  }
}

export default FormRegister
