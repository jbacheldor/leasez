import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SideSheetProvider } from './store/Contexts/sideSheetContext';
import store from './store';
import { Provider } from 'react-redux';

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
  <SideSheetProvider>
  <App />
  </SideSheetProvider>,
  </Provider>
)