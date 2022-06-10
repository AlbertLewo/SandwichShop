import React from 'react';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Contact = () => {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (      
    <div className="App">
        <style>{'body { background-color: #C5F1FF; }'}</style>

      <Typography align="center" id="modal-modal-title" variant="h3" component="h3" >
        Contact Us Form
      </Typography>

      <Typography align="center" id="modal-modal-title" variant="h5" component="h5">
        Your concerns are our concerns. Please express how you feel about our services and perhaps we could take your feedback into consideration and use it to improve.
      </Typography>

<br></br>

      <Card style={{flex:1, backgroundColor:'#FFFDD0'}}>
        <CardContent>
          <Grid container={1} direction={"row"} spacing={5} >

          <Grid xs={16} sm={3} item>
            <TextField style={{flex:1, backgroundColor:'white'}} label="First Name" placeholder="Enter your first name" variant="outlined" fullWidth/>
          </Grid>

          <Grid xs={16} sm={3} item>
            <TextField style={{flex:1, backgroundColor:'white'}} label="Last Name" placeholder="Enter your last name" variant="outlined" fullWidth/>
          </Grid>

          </Grid>
        </CardContent>
      </Card>

      <Card style={{flex:1, backgroundColor:'#C29A7B'}}>
        <CardContent>
          <Grid container={1} direction={"row"} spacing={5}>

        <Grid xs={16} sm={3} item>
          <TextField style={{flex:1, backgroundColor:'white'}} type="email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth/>
        </Grid>

        <Grid xs={16} sm={3} item>
          <TextField style={{flex:1, backgroundColor:'white'}} type="phone" label="Phone" placeholder="Enter your phone number" variant="outlined" fullWidth/>
        </Grid>

        </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent style={{flex:1, backgroundColor:'#FF6961'}}>
          <Grid container={1} direction={"row"} spacing={5}>
            <Grid xs={16} sm={3} item>
              <TextField style={{flex:1, backgroundColor:'white'}} label="Address" placeholder="Enter your address" variant="outlined" fullWidth/>
            </Grid>

            <Grid xs={16} sm={3} item>
              <TextField style={{flex:1, backgroundColor:'white'}} label="Suburb" placeholder="Enter your Suburb" variant="outlined" fullWidth/>
            </Grid>

          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent style={{flex:1, backgroundColor:'#FFF979'}}>
          <Grid container={1} direction={"row"} spacing={5}>
            <Grid xs={16} sm={3} item>
              <TextField style={{flex:1, backgroundColor:'white'}} type='number' label="Postcode" placeholder="Enter your Postcode" variant="outlined" fullWidth/>
            </Grid>

            <Grid xs={16} sm={3} item>
              {/* <TextField style={{flex:1, backgroundColor:'white'}} label="State" placeholder="Select your state" variant="outlined" fullWidth/> */}
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth style={{flex:1, backgroundColor:'white'}}>
              <InputLabel id="state-select">State </InputLabel>
                <Select
                  labelId="State-Select"
                  id="State-Select"
                  value={state}
                  label="Select your state"
                  onChange={handleChange}
                >
                  <MenuItem value={'New South Wales'}>New South Wales</MenuItem>
                  <MenuItem value={'Queensland'}>Queensland</MenuItem>
                  <MenuItem value={'Victoria'}>Victoria</MenuItem>
                  <MenuItem value={'Northern Territory'}>Northern Territory</MenuItem>
                  <MenuItem value={'Western Australia'}>Western Australia</MenuItem>
                  <MenuItem value={'South Australia'}>South Australia</MenuItem>
                  <MenuItem value={'ACT'}>ACT</MenuItem>
                  <MenuItem value={'Tasmania'}>Tasmania</MenuItem>
                </Select>
            </FormControl>
            </Box>
            </Grid>
            
          </Grid>
        </CardContent>
      </Card>



      <Card>
        <CardContent style={{flex:1, backgroundColor:'#99EE99'}} align={'Center'}>
          <Grid container={1} direction={"row"} spacing={5}>

            <Grid xs={16} sm={3} item>
              <TextField style={{flex:1, backgroundColor:'white'}} label="Message" multiline rows={4} placeholder="Please type your message in here" variant="outlined" fullWidth/>
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
                sx={{ mt: 3, mb: 1 }}
                style={{flex:1, backgroundColor:'#C4ACE3'}}
              >
              Submit Form

            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
    
  );
};

export default Contact;
