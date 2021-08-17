import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import {Provider} from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store} >
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);