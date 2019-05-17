import axios from "axios";

export const postRecommendation = () => dispatch => {
  axios
    .post(
      "https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&count=8&cuisines=1040&establishment_type=1&sort=rating"
    )
    .then(res => dispatch({}))
    .catch(error => console.log(error));
};
