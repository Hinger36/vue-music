import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  data: '',
  newsong: '',
  hotsong: {
    cover: ''
  },
  playsong: {
    Img: '',
    data: ''
  },
  playshow: false,
  musicsheet: '',
};

const mutations = {
  getData(state, payload) {
    state.data = payload;
  },
  getNewsong(state, payload) {
    state.newsong = payload;
  },
  getHotsong(state, payload) {
    state.hotsong.tracks = payload.tracks;
    state.hotsong.cover = payload.coverImgUrl;
  },
  playSong(state, payload) {
    state.playsong = payload;
    state.playshow = true;
  },
  getMusicsheet(state, payload) {
    state.musicsheet = payload;
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