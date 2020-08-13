import { combineReducers } from 'redux';
import countReducer from './countReducer';
import authReducer from './authReducer';
import navReducer from './navReducer';
import userInfReducer from './userInfReducer';
import { memes } from '../toolkit';

const rootReducer = combineReducers({
  count: countReducer,
  auth: authReducer,
  nav: navReducer,
  userInf: userInfReducer,
  memes: memes.reducer
});
export default rootReducer;