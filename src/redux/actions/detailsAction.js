import axios from "axios";

export const getDetails = () => dispatch => {
  axios
    .get("/")
    .then(res =>
      dispatch({
        type: "details",
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
