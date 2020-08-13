import { call, cancel, cancelled, fork, put, take, takeEvery } from 'redux-saga/effects';
import { types } from '../redux';

const avaibleUsers = [
  {
    username: 'Vova',
    password: 'password',
    secondName: 'Danilov'
  },
  {
    username: 'Roma',
    password: 'password1',
    secondName: 'Ragozin'
  },
  {
    username: 'V',
    password: 'P',
    secondName: 'Sss'
  }
]

export function fakeAuthorize(username, password) {
  return new Promise((resolve, reject) => {
    try {
      const result = avaibleUsers.filter(user =>
        user.username === username && user.password === password
      )
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

function* sagaWorker(action) {
  const result = yield call(fakeAuthorize, action.username, action.password);
  console.log(result);
  if (result.length) {
    yield put({ type: types.LOGIN_SUCCESS });
    yield put({ type: types.GO_TO, screenName: types.Page1 });
    yield put({ type: types.TAKE_CURRENT_USER, username: result[0].username, password: result[0].password, secondName: result[0].secondName });
  }
  else {
    alert('Username or password is wrong');
  }
}

function* sagaWorker2() {
  yield put({ type: types.GO_TO, screenName: types.Login })
}

export function* sagaWatcher() {
  yield takeEvery(types.LOGIN_REQUEST, sagaWorker);
  yield takeEvery(types.LOGOUT, sagaWorker2)
}