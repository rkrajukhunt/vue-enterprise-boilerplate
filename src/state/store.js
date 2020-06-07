import Vue from "vue";
import Vuex from "vuex";
import createLogger from 'vuex/dist/logger';
import authModule from "./modules/auth";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth: authModule
  },
  state: {},
  mutations: {},
  actions: {},
  strict: debug,
  plugins: debug ? [createLogger()] : [] // set logger only for development
});
