import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {MoralisProvider} from 'react-moralis';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MoralisProvider serverUrl='https://3zbhqjoefyx4.usemoralis.com:2053/server' appId='DLbpqy8Tp7tvezfIKuK65YLS36hEQcGkw9pVKbVC'>
      <App />
    </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

