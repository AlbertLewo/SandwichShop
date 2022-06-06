import React from 'react';
import './App.css';
import { Typography, Card, CardContent, Grid, TextField } from '@material-ui/core'
  
const Contact = () => {

  return (
    <div className="App">

      <Typography align="center" id="modal-modal-title" variant="h2" component="h2" >
        Contact Us Page
      </Typography>

      <Card>
        <CardContent>
          <Grid container={1} m={2} p={5} direction={"row"} spacing={5} >

          <Grid xs={16} sm={2} item>
            <TextField label="First Name" placeholder="Enter your first name" variant="outlined" fullWidth/>
          </Grid>

          <Grid xs={16} sm={2} item>
            <TextField label="Last Name" placeholder="Enter your first name" variant="outlined" fullWidth/>
          </Grid>

          </Grid>
        </CardContent>
      </Card>

    </div>
    
  );
};

export default Contact;
