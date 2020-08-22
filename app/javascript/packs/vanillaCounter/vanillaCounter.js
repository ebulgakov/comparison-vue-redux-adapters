import store from '../store';
import {increment, decrement} from "../counterReducers/actions";


export default () => {
  const setCounter = () => {
    const counter = document.getElementById('vanilla-counter-counter');
    counter.innerText = store.getState().counter
  };

  setCounter();
  store.subscribe(setCounter);

  document.getElementById('vanilla-counter-increase').addEventListener('click', () => {
    store.dispatch(increment())
  });
  document.getElementById('vanilla-counter-decrease').addEventListener('click', () => {
    store.dispatch(decrement())
  });
}
