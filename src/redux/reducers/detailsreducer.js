const initialState = {
  name: null,
  photos_url: null,
  address: null,
  city: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "details":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
