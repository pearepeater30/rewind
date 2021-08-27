import './SimpleCard.css';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '20vw',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
  pos: {
    marginBottom: 12,
  },
}));

function SimpleCard(props) {
  const classes = useStyles();
  
  return(
    <Card className={classes.root} variant="outlined">
      {props.children}
    </Card>
  )
    
}

export default SimpleCard;