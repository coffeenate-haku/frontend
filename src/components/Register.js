import React from 'react'

class FormRegister extends React.Component {
  state = {
    data: {}
  }

  render() {
    return (
      <form>
        <h1>Signup</h1>
        <fieldset>
          <input placeholder="Name" type="text" name="name" />
        </fieldset>

        <fieldset>
          <input  placeholder="Username" type="text" name="username" />
        </fieldset>

        <fieldset>
          <input placeholder="Email" type="email" name="email" />
        </fieldset>

        <fieldset>
          <input placeholder="Password" type="password" name="password" />
        </fieldset>

        <input type="submit" value="Register" />
      </form>
    )
  }
}

export default FormRegister