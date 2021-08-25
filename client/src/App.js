import './App.css';
import React, { Fragment } from 'react';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import { CssBaseline,withStyles } from '@material-ui/core';


function App() {
  return (
    <CssBaseline>
      <AppHeader />
      <Home />
    </CssBaseline>
      

  );
}
export default (App);
