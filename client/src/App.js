import './App.css';
import React, { Fragment } from 'react';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import { CssBaseline,withStyles } from '@material-ui/core';


function App() {
  return (
    <CssBaseline>
      <AppHeader>
      </AppHeader>
      <Home></Home>
    </CssBaseline>
      

  );
}
export default (App);
