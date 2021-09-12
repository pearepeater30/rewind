import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function AppHeader () {
  return(
  <AppBar position="static">
      <Toolbar>
      <Typography variant='h5'>
        My React App
      </Typography>
    </Toolbar>
  </AppBar>
  );
}

export default AppHeader