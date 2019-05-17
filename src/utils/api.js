const axios = require("axios")

const API_STRING = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&count=8&cuisines=1040&establishment_type=1&sort=rating`
const API_STRING_QUERY = `https://developers.zomato.com/api/v2.1/search?entity_id=72939&entity_type=subzone&count=8&cuisines=30&establishment_type=1`

const API_CONFIG = {
  headers: {
    "user-key": process.env.REACT_APP_API_KEY
  }
}

export const getBestRestaurants = (payload) => {
  return axios
    .get(`${API_STRING}&q=${payload}`, API_CONFIG)
    .then(response => {
      return response.data.restaurants
    })
    .catch(error => {
      console.warn(error)
      return error
    })
}

export const getRestaurantbyDistance = () => {
  return axios
    .get(API_STRING_QUERY, API_CONFIG)
    .then(response => {
      return response.data.restaurants
    })
    .catch(error => {
      console.warn(error)
      return error
    })
}
