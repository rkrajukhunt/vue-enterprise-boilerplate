import Vue from 'vue';
import * as VeeValidate from 'vee-validate';
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import { configure } from 'vee-validate';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.use(VeeValidate);
configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
      dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    }
  });
  Object.keys(rules).forEach(rule => {
    extend(rule, {
      ...rules[rule], // copies rule configuration
      message: messages[rule] // assign message
    });
  });

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)