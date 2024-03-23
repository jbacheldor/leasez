import './App.css';
import React, { useContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Archive } from './Pages/Archive';
import { Compare } from './Pages/Compare';
import { Header } from './Components/Header';
import { Navigation } from './Components/Navigation';
import { Grid } from '@mui/material';
import "../src/Components/header.style.css";
import { CardViewProvider } from './store/Contexts/cardViewContext';
import { useDispatch, useSelector } from 'react-redux';
import store from './store';
import { IStoreState } from "./Types";
import { stateActions } from './store/ActionKeys/actionkeys';
import "./App.css";

export const SwitchRoutes: React.FC = () => {
  return (
    <Routes>  
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/compare' element={<Compare/>}/>
    </Routes>
  )
}

const mapStateToProps = (state: IStoreState) => ({
  appState: state.applicationState,
});

const App: React.FC = () => {

  // app state is returning undefined but acting almost as a subscriber?
  // the function won't work if this isn't here
  const { appState } = useSelector(mapStateToProps);

 const {appStateReducer} = store.getState().reducers;

  const dispatch = useDispatch(); 

  // even though appState is undefined here when it sends
  // it is populated ?? and still works?? 
  const isOpen = () => {
    dispatch({appState, type: stateActions.NAV_TOGGLE});
  }

  return (
    <Router>
    <Header 
      name="Jess"
      OnClick={() => isOpen()}
      />
    <CardViewProvider>
    <Grid flex="1 1 auto" className="appGrid">
    {appStateReducer.navigationOpen && (
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
