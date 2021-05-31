import home from '../page/home/reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { KEY_STORE } from './constants';

const rootReducer = combineReducers({ home });
const storedState = JSON.parse(localStorage.getItem(KEY_STORE)) || {};
const store = createStore(rootReducer, storedState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem(KEY_STORE, JSON.stringify(store.getState()));
});

export default store;