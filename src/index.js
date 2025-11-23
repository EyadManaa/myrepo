import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Helpful debug logs to confirm the app is mounting in the browser console
console.log('index.js loaded — attempting to mount App to #root');
try {
  console.log('Rendering App to #root');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('root.render completed — App should be visible');
} catch (err) {
  console.error('Error during root.render:', err);
  throw err;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
