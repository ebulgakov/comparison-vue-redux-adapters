import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import counterReducer from './counterReducers/reducer'


const store = createStore(combineReducers({
  counter: counterReducer
}), {}, devToolsEnhancer())

export default store
