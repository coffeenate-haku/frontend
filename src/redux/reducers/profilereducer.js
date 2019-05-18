const initialState = {
  id: null,
  token: null,
  name: null,
  email: null,
  isAuthenticated: false,
  isAdmin: null,
  modal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state, //state dari initialState
        ...action.payload, //state dalam action
        isAuthenticated: true,
        modal: false
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: true
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: false
      };
    default:
      return state;
  }
};
