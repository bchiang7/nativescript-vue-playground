import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
};

const getters = {};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
};

const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--,
};

const strict = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict,
});

export default store;
