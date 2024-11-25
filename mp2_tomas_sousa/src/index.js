import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Redux
import { Provider } from 'react-redux';
import store from './reduxStore/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SpeedInsights>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </SpeedInsights>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
