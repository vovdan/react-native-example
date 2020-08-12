import { types } from '../types';

export const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COUNT:
      return state + 1
    default:
      return state;
  }
}

export default counterReducer;