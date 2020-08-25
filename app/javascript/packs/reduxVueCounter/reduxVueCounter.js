import Vue from 'vue';
import { bindActionCreators } from 'redux';
import { reduxStorePlugin, connect } from 'redux-vue';
import * as Actions from '../counterReducers/actions'
import store from '../store';

Vue.use(reduxStorePlugin);

const AppComponent = {
  props: {
    counter: {
      type: Number,
    },
    increment: {
      type: Function
    },
    decrement: {
      type: Function
    }
  },
  render () {
    return <div>
      <h1><a href="https://github.com/nadimtuhin/redux-vue" target="_blank">redux-vue</a> Counter (jsx)</h1>
      <div>Count: { this.counter }</div>
      <button on-click={this.decrement}>-1</button>
      <button on-click={this.increment}>+1</button>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapActionToProps(dispatch) {
  return { ...bindActionCreators(Actions, dispatch) }
}

const App = connect(mapStateToProps, mapActionToProps)(AppComponent);

export default () => {
  new Vue({
    store,
    el: '#redux-vue-counter',
    render () {
      return <App />
    }
  })
}
