import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from './App';
import reducer from './redux/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);

root.render(
  <Provider store={store}>
     <App />
  </Provider>

);

