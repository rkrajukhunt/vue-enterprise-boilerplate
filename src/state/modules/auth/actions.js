import * as types from "./types";

export default {
  // Logs out the current user.
  async logOut({ commit }) {
    commit(types.SET_USER_INFO, null);
  },
  // Logs in the current user.
  async logIn({ commit, dispatch, getters }, { username, password } = {}) {
    if (getters.loggedIn) return dispatch("validate");

    // calling api here
    const user = { username, password };
    commit(types.SET_USER_INFO, user);
  },
  // Validates the current user's token and refreshes it
  // with new data from the API.
  validate({ commit, state }) {
    if (!state.currentUser) return Promise.resolve(null);

    const user = getSavedState("auth.currentUser");
    if (user) {
      commit(types.SET_USER_INFO, user);
      return user;
    } else {
      commit(types.SET_USER_INFO, null);
      return null;
    }
  }
};

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
