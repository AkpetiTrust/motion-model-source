import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Pages/Intro/Intro";
import Help from './Pages/Help/Help';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path='/' exact element={<Intro />} />
        <Route path='/help' exact element={<Help />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
