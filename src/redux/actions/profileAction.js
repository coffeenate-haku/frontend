import axios from "axios";

export const login = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/users/login`, data) //api login
    .then(({ data: { token, user: { email, name, id } } }) => {
      console.log(id);
      const payload = {
        id,
        token,
        email,
        name
      };
      dispatch({
        type: "login",
        payload
      });
      localStorage.setItem("token", token);
    })
    .catch(error => console.log(error));
};
