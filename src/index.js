import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import { Home } from './Pages/Home.tsx';
import { Archive } from './Pages/Archive.tsx';
import { Compare } from './Pages/Compare.tsx';
import { Navigation } from './Components/Navigation.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Archive",
    element: <Archive/>,
  },
  {
    path: "/Compare",
    element: <Compare/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navigation/>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);