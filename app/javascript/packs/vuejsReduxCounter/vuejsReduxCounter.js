import Vue from 'vue';
import Counter from './Component.vue'

export default () => {
  new Vue({
    components: { Counter },
    render: h => h(Counter),
  }).$mount('#vuejs-redux-counter')
}
