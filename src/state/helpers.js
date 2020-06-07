import { mapState, mapGetters, mapActions } from "vuex";

export const authComputed = {
  ...mapState("auth", {
    currentUser: state => state
  }),
  ...mapGetters("auth", ["loggedIn"])
};

export const authMethods = mapActions("auth", ["logIn", "logOut"]);
