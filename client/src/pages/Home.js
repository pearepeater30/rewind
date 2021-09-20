import React from 'react';
import {Typography, Container, Button} from '@material-ui/core';
import '../styles/Home.css'

function Home () {
  return(
    <div id = "showcase">
      <Typography variant="h4">
        <Container fixed>
          Welcome Home!
        </Container>
      </Typography>
      <div id = "button-group">
            <Button>Press</Button>
          </div>
    </div>
    
  )
}

export default Home