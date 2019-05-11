import React from "react"
import axios from "axios"
import styled from "@emotion/styled"

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px 10px;
`
const Button = styled.button`
  background-color: #4c3a32;
  color: #f5f1e8;
  border-style: none;
  padding: 5px 10px;
`
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

    const API_URL = `https://coffeenate-backend-mongoose.herokuapp.com/users/register`
    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios
      .post(API_URL, user)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Signup</h1>
        <fieldset>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            onChange={this.handleChange}
          />

          <Input
            placeholder="Username"
            type="text"
            name="username"
            onChange={this.handleChange}
          />

          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
          />

          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <Button type="submit">Register</Button>
        </fieldset>
      </form>
    )
  }
}

export default FormRegister
