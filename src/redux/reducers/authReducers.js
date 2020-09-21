import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      const user = action.payload;
      localStorage.setItem("auth_user", JSON.stringify(user));
      return {
        isAuthenticated: true,
        user
      };
    }
    case CLEAR_CURRENT_USER: {
      localStorage.removeItem('auth_user');
      return {
        isAuthenticated: false,
        user: {}
      };
    }
    default:
      return state;
  }
};
