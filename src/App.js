import React from 'react';
import './App.css';
import { Provider as StoreProvider } from "react-redux";
import Router from './pages';
import store from './redux/store'

const App = () => {
  return (
    <div>
      <StoreProvider store={store}>
      <Router />
      </StoreProvider>
    </div>
  );
}

export default App;
