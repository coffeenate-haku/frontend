import axios from "axios";

export const login = () => dispatch => {
  axios
    .get("https://coffeenate.herokuapp.com/users/login") //api login
    .then(res =>
      dispatch({
        type: "login",
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
