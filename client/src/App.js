import './App.css';
import React, { Fragment } from 'react';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import FileUploadField from './components/FileUploadField';
import Box from '@material-ui/core/Box';
import SimpleCard from './components/SimpleCard'
import { CssBaseline,withStyles } from '@material-ui/core';


function App() {
  return (
    <div>
    <CssBaseline>
      <AppHeader />
      <Box my="10rem" mx="4rem" justifyContent="center">
      <SimpleCard>
        <FileUploadField >
        </FileUploadField>
      </SimpleCard>
      </Box>
    </CssBaseline>
    </div>
  );
}
export default (App);
