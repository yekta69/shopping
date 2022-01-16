import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './component/navbar';
import{SpecialOffer} from'./component/specialOffer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <SpecialOffer/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
