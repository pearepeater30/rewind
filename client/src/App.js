import './App.css';
import React, { Fragment } from 'react';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './components/SimpleCard'
import { CssBaseline,withStyles } from '@material-ui/core';


function App() {
  return (
    <CssBaseline>
      <AppHeader />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <SimpleCard>
            <Home />
          </SimpleCard>
        </Grid>      
      </Grid>
      
    </CssBaseline>
  );
}
export default (App);
