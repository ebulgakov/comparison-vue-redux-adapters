const noop = () => {};

const getStore = component => component.$store;

const getAttrs = component => component._self.$options._parentVnode.data.attrs;

const getActions = (component, mapDispatchToProps) => {
  const store = getStore(component);
  return mapDispatchToProps(store.dispatch, getAttrs.bind(null, component)) || {};
};

const getStates = (component, mapStateToProps) => {
  const store = getStore(component);
  const attrs = getAttrs(component);
  return mapStateToProps(store.getState(), attrs) || {};
};

const getProps = component => {
  const props = {};
  const attrs = getAttrs(component);
  const stateNames = component.vueConnectStateNames;
  const actionNames = component.vueConnectActionNames;

  for (let i = 0; i < stateNames.length; i += 1) {
    props[stateNames[i]] = component[stateNames[i]];
  }

  for (let i = 0; i < actionNames.length; i += 1) {
    props[actionNames[i]] = component[actionNames[i]];
  }

  return {...props, ...attrs};
};

/**
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @returns Object
 */
export const connect = (mapStateToProps = noop, mapDispatchToProps = noop) => (children) => ({
  name: `VueConnect-${children.name || 'children'}`,
  render(h) {
    const props = getProps(this);
    return h(children, { props });
  },
  data () {
    const state = getStates(this, mapStateToProps);
    const actions = getActions(this, mapDispatchToProps);
    const vueConnectStateNames = Object.keys(state);
    const vueConnectActionNames = Object.keys(actions);

    return { vueConnectStateNames, vueConnectActionNames, ...state, ...actions };
  },
  created () {
    const store = getStore(this);

    this.vueConnectUnsubscribe = store.subscribe(() => {
      const state = getStates(this, mapStateToProps);
      const stateNames = Object.keys(state);
      this.vueConnectStateNames = stateNames;

      for (let i = 0; i < stateNames.length; i+= 1) {
        this[stateNames[i]] = state[stateNames[i]];
      }
    });
  },
  beforeDestroy () {
    this.vueConnectUnsubscribe();
  }
});

export const initialState = (Vue) => {
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;

      if (options['store']) {
        this.$store = options.store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
    }
  });
};
