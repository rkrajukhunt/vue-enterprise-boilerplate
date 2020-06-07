export default {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.currentUser;
  }
};
