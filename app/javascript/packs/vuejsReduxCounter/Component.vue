<template>
  <Provider :store="store" :mapStateToProps="mapStateToProps" :mapDispatchToProps="mapDispatchToProps">
    <template #default="{ counter, actions }">
      <div>
        <h1><a href="https://github.com/titouancreach/vuejs-redux" target="_blank">vuejs-redux</a> Counter</h1>
        <div>Count: {{ counter }}</div>
        <button @click="actions.decrement()">-1</button>
        <button @click="actions.increment()">+1</button>
      </div>
    </template>
  </Provider>
</template>

<script>
  import Provider from 'vuejs-redux';
  import { bindActionCreators } from 'redux'
  import store from '../store'
  import * as Actions from '../counterReducers/actions'

  export default {
    methods: {
      mapStateToProps(state) {
        return { counter: state.counter }
      },

      mapDispatchToProps(dispatch) {
        return { actions: bindActionCreators(Actions, dispatch) }
      },
    },
    components: {
      Provider,
    },
    data: () => ({
      store
    })
  }
</script>
