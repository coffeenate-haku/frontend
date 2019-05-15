import axios from "axios";

export const login = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/users/login`, data) //api login
    .then(({ data: { token, user: { email, name } } }) => {
      const payload = {
        token,
        email,
        name
      };
      dispatch({
        type: "login",
        payload
      });
    })
    .catch(error => console.log(error));
};
