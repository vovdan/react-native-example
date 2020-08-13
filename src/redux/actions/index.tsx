import { types } from '../types';

export const addCount = () => ({
  type: types.ADD_COUNT
})

export const loginRequest = (username, password) => ({
  type: types.LOGIN_REQUEST,
  username: username,
  password: password
})

export const logOut = () => ({
  type: types.LOGOUT
})


export const goTo = (screenName) => ({
  type: types.GO_TO,
  screenName: screenName
})

export const currentUser = (username, password, secondName) => ({
  type: types.TAKE_CURRENT_USER,
  username: username,
  password: password,
  secondName: secondName
})