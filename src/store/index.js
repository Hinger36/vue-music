import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  data: '',
  newsong: '',
  hotsong: '',
  playsong: {
    Img: '',
    data: ''
  },
  playshow: false,
  musicsheet: '',
  sheetshow: true,
};

const mutations = {
  getData(state, payload) {
    state.data = payload;
  },
  getNewsong(state, payload) {
    state.newsong = payload;
  },
  getHotsong(state, payload) {
    state.hotsong = payload;
  },
  playSong(state, payload) {
    state.playsong = payload;
    state.playshow = true;
  },
  getMusicsheet(state, payload) {
    state.musicsheet = payload;
    state.sheetshow = false;
  }
};

const getters = {

};

const actions = {

};




export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  getters,
  actions
});