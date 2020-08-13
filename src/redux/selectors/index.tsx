export function countSelector(state) {
  return state.count;
}

export function isLoggedSelector(state) {
  return state.auth.isLogged;
}

export function navScreenSelector(state) {
  return state.nav;
}

export function currentUserSelector(state) {
  return state.userInf;
}