import Vue from 'nativescript-vue';
// import VueDevtools from 'nativescript-vue-devtools';
import { App } from '~/components';
import store from '~/store';

Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient);

/* global TNS_ENV */

if (TNS_ENV !== 'production') {
  // Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production');


new Vue({
  render: h => h('frame', [h(App)]),
  store,
}).$start();
