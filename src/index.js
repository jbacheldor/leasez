import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import { Home } from './Pages/Home.tsx';
import { Archive } from './Pages/Archive.tsx';
import { Compare } from './Pages/Compare.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/archive' element={<Archive/>}></Route>
        <Route exact path='/compare' element={<Compare/>}></Route>
      </Routes>
      <App />
    </Router>
  </React.StrictMode>
);