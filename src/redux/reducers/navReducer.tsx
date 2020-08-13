import { types } from '../types';

export const initialState = 'Login';

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GO_TO:
      return action.screenName
    default:
      return state
  }
}

export default navReducer;