import axios from "axios";

export const closeModal = () => dispatch => {
  dispatch({
    type: "CLOSE_MODAL"
  })
}

export const openModal = () => dispatch => {
  dispatch({
    type: "OPEN_MODAL"
  })
}

export const login = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/users/login`, data, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3001" || "http://localhost:3000" || "https://coffenate-haku.netlify.com",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      }
    }) //api login
    .then(({ data: { token, user: { email, name, id } } }) => {
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
      localStorage.setItem("token", token)
    })
    .catch(error => console.log(error));
};
