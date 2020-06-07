import Vue from "vue";
import router from "@router";
import store from "@state/store";
import App from "./App.vue";

import './plugins/bootstrap-vue';
import './plugins/vee-validate';
import './plugins/vue-i18n';
import './plugins/vue-notification';
import './plugins/vue-sweetalert2';
import './plugins/vue-multiselect';
import i18n from './plugins/vue-i18n';

// Globally register all `_base`-prefixed components
import "@components/_globals";

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === "production";

// If running inside Cypress...
if (process.env.VUE_APP_TEST === "e2e") {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException;
}

const app = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// If running e2e tests...
if (process.env.VUE_APP_TEST === "e2e") {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app;
}
