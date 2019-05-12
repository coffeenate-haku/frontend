import axios from "axios";

export const search = () => dispatch => {
  axios
    .get("/")
    .then(res =>
      dispatch({
        type: "search",
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
