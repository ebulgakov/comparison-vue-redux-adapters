import Vue from 'vue';
import { bindActionCreators } from 'redux';
import { connect, initialState }  from '../vue-connect';
import * as Actions from '../counterReducers/actions'
import store from '../store';

Vue.use(initialState);

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
      <h1>Vue Connect Counter</h1>
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

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(Actions, dispatch) }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default () => {
  new Vue({
    store,
    data: {
      hasAppVisible: true
    },
    el: '#vue-connect-counter',
    methods: {
      toggleAppVisible() {
        this.hasAppVisible = !this.hasAppVisible;
      }
    },
    render (h) {
      return <div>
        <button on-click={this.toggleAppVisible}>Toggle Visibility</button>
        {this.hasAppVisible && (<App />)}
      </div>
    }
  })
}
