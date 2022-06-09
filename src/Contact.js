import React from 'react';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'

const Contact = () => {

  return (
    <div className="App">

      <Typography align="center" id="modal-modal-title" variant="h3" component="h3" >
        Contact Us Form
      </Typography>

      <Typography align="center" id="modal-modal-title" variant="h5" component="h5">
        Your concerns are our concerns. Please express how you feel about our services and perhaps we could take your feedback into consideration and use it to improve.
      </Typography>

<br></br>

      <Card>
        <CardContent>
          <Grid container={1} direction={"row"} spacing={5} >

          <Grid xs={16} sm={3} item>
            <TextField label="First Name" placeholder="Enter your first name" variant="outlined" fullWidth/>
          </Grid>

          <Grid xs={16} sm={3} item>
            <TextField label="Last Name" placeholder="Enter your last name" variant="outlined" fullWidth/>
          </Grid>

          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Grid container={1} direction={"row"} spacing={5}>

        <Grid xs={16} sm={3} item>
          <TextField type="email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth/>
        </Grid>

        <Grid xs={16} sm={3} item>
          <TextField type="phone" label="Phone" placeholder="Enter your phone number" variant="outlined" fullWidth/>
        </Grid>

        </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Grid container={1} direction={"row"} spacing={5}>

            <Grid xs={16} sm={3} item>
              <TextField label="Message" multiline placeholder="Please type your message in here" variant="outlined" fullWidth/>
            </Grid> 

          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Grid container={1} direction={"row"} spacing={5}>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Sign In

            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
    
  );
};

export default Contact;
