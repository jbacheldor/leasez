import './App.css';
import React, { useContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Archive } from './Pages/Archive';
import { Compare } from './Pages/Compare';
import { Header } from './Components/Header';
import { Navigation } from './Components/Navigation';
import { SideSheetContext } from './store/Contexts/sideSheetContext';
import { Box, Grid } from '@mui/material';
import "../src/Components/header.style.css";
import { CardViewProvider } from './store/Contexts/cardViewContext';

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
  const [sideSheetOpen, setSideSheet] = useState(false);
  const { sideSheetGlobalOpen, setSideSheetGlobalOpen } = useContext(SideSheetContext);

  const isOpen = () => {
      if(sideSheetGlobalOpen){
          setSideSheet(false);
          setSideSheetGlobalOpen(false);
      }
      else {
          setSideSheet(true);
          setSideSheetGlobalOpen(true);
      }
  }

  return (
    <Router>
    <Header 
      name="Jess"
      OnClick={() => isOpen()}
      />
    <CardViewProvider>
    <Grid flex="1 1 auto" className="appGrid">
    {sideSheetOpen && sideSheetGlobalOpen && (
          <Navigation/>
    )} 
    <div className="pages">
      <SwitchRoutes/>
    </div>

    </Grid>
    </CardViewProvider>
  </Router>
  );
}

export default App;
