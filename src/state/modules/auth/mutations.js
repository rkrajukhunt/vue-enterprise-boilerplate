import * as types from "./types";

const mutations = {
  [types.SET_USER_INFO](state, payload) {
    Object.assign(state.currentUser, payload);
    saveState("auth.currentUser", payload);
  }
};

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state));
}

export default mutations;
