import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from 'react-redux'
import store from './app/store'; // Import your Redux store
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App component with Provider and pass the store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
