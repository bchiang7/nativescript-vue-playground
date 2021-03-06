import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import { App } from '@/components';
import store from '@/store';

/* global TNS_ENV */
if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

Vue.prototype.$store = store;

Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient);

console.warn('📣: main.js sdfsdf');

new Vue({
  store,
  render: h => h('frame', [h(App)]),
}).$start();
