import initVdeuxCounter from "./vdeuxCounter/vdeuxCounter";
import initVanillaCounter from "./vanillaCounter/vanillaCounter";
import initVueReduxCounter from "./vueReduxCounter/vueReduxCounter";
import initReduxVueCounter from "./reduxVueCounter/reduxVueCounter";
import initVuejsReduxCounter from "./vuejsReduxCounter/vuejsReduxCounter";

document.addEventListener("DOMContentLoaded", () => {
  initVdeuxCounter();
  initVueReduxCounter();
  initReduxVueCounter();
  initVanillaCounter();
  initVuejsReduxCounter();
});
