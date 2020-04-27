import { authAPI } from "../api/api";
//Initialise state
const initialState = {
  user: {
    id: null,
    email: null,
    login: null,
  },
  isAuth: false,
  isPending: false,
  error: null,
};

const SET_USER_DATA = "habit-tracker/auth/SET_USER_DATA";
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, { isPending: true });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        email: "success",
        isPending: false,
      });
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};

export const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_PENDING });
  authAPI
    .login(email, password)
    // .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .then((data) => dispatch({ type: LOGIN_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: LOGIN_FAILED, payload: error }));
};
