import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId='0b19b8a7-cc7e-40b3-878d-a7962eda1d29' language='en-US' >
      <App />
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
