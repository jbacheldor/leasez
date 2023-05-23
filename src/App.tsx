import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Archive } from './Pages/Archive';
import { Compare } from './Pages/Compare';
import { Header } from './Components/Header';

export const SwitchRoutes: React.FC = () => {
  return (
    <Routes>  
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/compare' element={<Compare/>}/>
    </Routes>
  )
}


const App: React.FC = () => {
  return (
    <Router>
    <SwitchRoutes/>
    <Header name="Jess"/>
  </Router>
  );
}

export default App;
