import React from 'react';
import {Helmet} from 'react-helmet';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import store1 from './store1.PNG'; // with import
import store2 from './store2.PNG'; // with import
import store3 from './store3.PNG'; // with import
import store4 from './store4.PNG'; // with import
import Button from "@mui/material/Button";
  

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '300%', 
  maxHeight: '100%',
}); {/* Sizing, positioning and margin of images */}

const Stores = () => {
  return (

<Paper
  sx={{
    p: 2,
    margin: 'auto',
    maxWidth: '200%',
    flexGrow: 1,
    backgroundColor: (theme) =>
      theme.palette.mode === 'dark' ? '#1A2027' : '#FFFDD0',
  }}
>
  <Grid container spacing={22}>
    <Grid item>
      <ButtonBase sx={{ width: 180, height: 240, marginLeft: 20}}>
        <Img src={store1} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 1:
          </Typography>
          <Typography variant="body2" gutterBottom>
            Address: 3/250 Pitt St, Sydney NSW 2000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Located in a small arcade within the heart of the city.
          </Typography>
        </Grid>
        <Grid item>
          {/*Button???*/}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" component="div">
         {/*Money???*/}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
<br></br>

<Grid container spacing={22}>
    <Grid item>
      <ButtonBase sx={{ width: 180, height: 240, marginLeft: 20}}>
        <Img src={store2} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 2:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 38 Palace Street, Ashfield NSW 2131
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Located near a reserve so customers can enjoy their sandwiches in a relaxing environment.
          </Typography>
        </Grid>
        <Grid item>
          {/*Button???*/}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" component="div">
         {/*Money???*/}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
 <br></br>

<Grid container spacing={22}>
    <Grid item>
      <ButtonBase sx={{ width: 180, height: 240, marginLeft: 20}}>
        <Img src={store3} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 3:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 6 Allegra Avenue, Belmore NSW 2192
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A stunning heritage store with a porch to enjoy your food. The grassy front lawn is perfect for furry pets and children to run around while you enjoy your meal.
          </Typography>
        </Grid>
        <Grid item>
          {/*Button???*/}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" component="div">
         {/*Money???*/}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
  <br></br>

  <Grid container spacing={22}>
    <Grid item>
      <ButtonBase sx={{ width: 180, height: 240, marginLeft: 20}}>
        <Img src={store4} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 4:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 6 Allegra Avenue, Belmore NSW 2192
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Located near a reserve so customers can enjoy their sandwiches in a relaxing environment.
          </Typography>
        </Grid>
        <Grid item>
          {/*Button???*/}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" component="div">
         {/*Money???*/}
        </Typography>
      </Grid>
    </Grid>
  </Grid>

</Paper>
  );
};

export default Stores;