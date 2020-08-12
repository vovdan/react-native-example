import { types } from '../types';

const initialState = {
  signInError: false,
  username: '',
  password: '',
  isLogged: false
};

export default function authReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case types.LOGIN_REQUEST:
      newState = { ...state, username: action.username, password: action.password };
      return newState;
    case types.LOGIN_SUCCESS:
      newState = { ...state, isLogged: true };
      return newState;
    case types.LOGOUT:
      newState = { ...state, username: '', password: '', isLogged: false };
      return newState;
    default:
      return state;
  }
}