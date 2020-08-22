import initVdeuxCounter from "./vdeuxCounter/vdeuxCounter";
import initVanillaCounter from "./vanillaCounter/vanillaCounter";
import initVueReduxCounter from "./vueReduxCounter/vueReduxCounter";
import initReduxVueCounter from "./reduxVueCounter/reduxVueCounter";

document.addEventListener("DOMContentLoaded", () => {
  initVdeuxCounter();
  initVueReduxCounter();
  initReduxVueCounter();
  initVanillaCounter();
});
