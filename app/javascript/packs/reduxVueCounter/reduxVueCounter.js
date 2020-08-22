import Vue from 'vue';
import { reduxStorePlugin, connect } from 'redux-vue';
import {increment, decrement} from "../counterReducers/actions";
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
      <h1>Redux-Vue Counter (jsx)</h1>
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
  return {
    increment() {
      dispatch(increment())
    },
    decrement() {
      dispatch(decrement())
    }
  }
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
