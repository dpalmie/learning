import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppTwo from './AppTwo';
import AppThree from './AppThree';
import ReducerEx from './ReducerEx';
import Async from './Async';
import { BrowserRouter as Router} from "react-router-dom"; 

ReactDOM.render(
  // <>
  // <Router>
  //   <App />
  // </Router>
  // <AppTwo authorized={false}/>
  // <AppThree />
  // <br/><br/>
  // <ReducerEx />
  // <Async login='dpalmie'/>
  // </>,
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);