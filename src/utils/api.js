const axios = require("axios")

const API_STRING = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&cuisines=1040&establishment_type=1&sort=rating"`
const API_CONFIG = {
  headers: {
    "user-key": process.env.REACT_APP_API_KEY
  }
}

export const getBestRestaurants = () => {
  return axios
    .get(API_STRING, API_CONFIG)
    .then(response => {
      return response.data.restaurants
    })
    .catch(error => {
      console.warn(error)
      return error
    })
}
