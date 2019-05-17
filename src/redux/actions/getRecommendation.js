import axios from "axios";

export const getRecommendation = payload => dispatch => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/users/recommendations/${payload}`, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`
      }
    })
    .then(results => {
      console.log(results.data)
      dispatch({
        type: "GET_RECOMMENDATION",
        payload: results.data
      });
    });
};
