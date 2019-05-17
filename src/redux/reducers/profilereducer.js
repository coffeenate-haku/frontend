const initialState = {
  id: null,
  token: null,
  name: null,
  email: null,
  isAuthenticated: false,
  isAdmin: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state, //state dari initialState
        ...action.payload, //state dalam action
        isAuthenticated: true
      };
    default:
      return state;
  }
};
