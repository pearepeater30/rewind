import './SimpleCard.css';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '20vw',
    display: 'flex', 
    justifyContent: 'center',
    flexDirection: 'center',
    alignItems: 'center'
  }
}));

function SimpleCard(props) {
  const classes = useStyles();
  
  return(
    <Box className={classes.root} variant="outlined" boxShadow={3}>
      {props.children}
    </Box>
  )
    
}

export default SimpleCard;