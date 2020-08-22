import Vue from "vue/dist/vue.esm";
import vdeux from "vdeux";
import store from "../store";
import {increment, decrement} from "../counterReducers/actions";

Vue.use(vdeux(store));

export default () => new Vue({
  map: (state) => ({
    counter: state.counter
  }),
  el: '#vdeux-counter',
  actions: {increment, decrement},
  methods: {
    increase() {
      this.$actions.increment()
    },
    decrease() {
      this.$actions.decrement()
    }
  }
});
