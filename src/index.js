import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux';
// import { store } from './store';
import { createStore } from 'redux';
import combineReducers from './reducers/index';
import App from './App';
import "./index.css"
import registerServiceWorker from './registerServiceWorker';

export const store = createStore(combineReducers);

console.log(store.getState());

render(
  <Provider store={store}>
      <App />
  </Provider>,
   document.getElementById('root')
 );


registerServiceWorker();
