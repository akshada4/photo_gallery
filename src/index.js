import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainpage from './Mainpage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from './SearchPage'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/photo_gallery" element={<Mainpage />} />
      <Route path="/photo_gallery/search=:SearchText" element={<SearchPage />} />
    </Routes>
  </Router> ,
  document.getElementById('root')
);
