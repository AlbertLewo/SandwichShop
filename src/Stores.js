import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import store1 from './store1.PNG'; // with import
import store2 from './store2.PNG'; // with import
import store3 from './store3.PNG'; // with import
import store4 from './store4.PNG'; // with import
import store5 from './store5.PNG'; // with import
import store6 from './store6.PNG'; // with import
import store7 from './store7.PNG'; // with import
import store8 from './store8.PNG'; // with import
import store9 from './store9.PNG'; // with import
import store10 from './store10.PNG'; // with import

  

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
          Address: 38 Palace St, Ashfield NSW 2131
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
          Address: 6 Allegra Ave, Belmore NSW 2192
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
          Address: 19 George St, Brisbane City QLD 4000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Siuated near the Brisbane City Botanical Gardens, a gorgeous flower garden where customers are able to bring their mealds to and enjoy the environment.
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
        <Img src={store5} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 5:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 28 Wise Close, Darwin NT 2830
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Located near a decent-sized park. A perfect location to enjoy our sandwiches on a beautiful sunny day.
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
        <Img src={store6} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 6:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 35 Birdwood Parade, Dalkeith WA 6009
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Located on Swan river, a stunning river that streams to the North/South Mole lighthouses. Perfect to enjoy a snadwich and some waterviews.
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
        <Img src={store7} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 7:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 13 St Johns Row, Glenelg SA 5045
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yet another store located near a beach so you can enjoy your sandwiches with a view of the ocean.
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
        <Img src={store8} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 8:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 218 Ferrars St, South Melbourne VIC 3205
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Located within the heart of Melbourne. Customers may take a seat and gaze upon the metropolis of Melbourne.
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
        <Img src={store9} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 9:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 32 Riverway Rd, Montrose TAS 7010
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Montrose Forshore Community Park is a local park that many customers take their meals to and enjoy the scenery.
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
        <Img src={store10} />
      </ButtonBase>
    </Grid>
    <Grid item xs={15} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Store Location 10:
          </Typography>
          <Typography variant="body2" gutterBottom>
          Address: 16 Feakes Pl, Campbell ACT 2612
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Situated near a cute and hidden park that all of our locals eat at. It features a few benches and a play area for pets and kids.
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

</Paper>
  );
};

export default Stores;