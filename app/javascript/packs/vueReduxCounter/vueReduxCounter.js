import Vue from "vue/dist/vue.esm";
import * as reduxMixinsCreator from 'vue-redux'
import * as actions from '../counterReducers/actions'
import store from '../store'

const reduxMixins = reduxMixinsCreator(actions)

export default () => new Vue({
  el: '#vue-redux-counter',
  data: {store},
  mixins: [reduxMixins]
});
