import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';

import recipes from './recipes';

import App from './components/App/App';
import reducer from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  recipes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
