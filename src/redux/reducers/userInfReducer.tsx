import { types } from '../types';

const initialState = {
  username: '',
  password: '',
  secondName: ''
};

const userInfReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.TAKE_CURRENT_USER:
      newState = { ...state, username: action.username, password: action.password, secondName: action.secondName };
      return newState;
    default:
      return state
  }
}

export default userInfReducer;