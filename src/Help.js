import React from 'react';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useState } from "react";

const Help = () => {
 
  return (      
    <div>
    <Card>
    <CardContent style={{flex:1, backgroundColor:'#ffbaba'}} align={'Center'}>
      <Grid container={1} direction={"row"} spacing={5}>

        <Grid xs={1} sm={14} item>
          <h1 align={'centre'} pt={10}>Help Page</h1>
          <h3>This page should clear up any confusion there is when using the application</h3>
          <h4>It contains information about elements that you are quite unsure of</h4>
        </Grid> 

      </Grid>
    </CardContent>
  </Card>

<Card>
<CardContent style={{flex:1, backgroundColor:'#ff7b7b'}} align={'Center'}>
  <Grid container={1} direction={"row"} spacing={5}>

    <Grid xs={1} sm={14} item>
      <h3>Sign Up</h3>
      <h4>The Sign Up button allows users to create an account, which further allows them to order sandwiches and add them to their cart. Users are required to input a unique username, followed by any password they wish</h4>
    </Grid> 

  </Grid>
</CardContent>
</Card>

<Card>
<CardContent style={{flex:1, backgroundColor:'#ff5252'}} align={'Center'}>
  <Grid container={1} direction={"row"} spacing={5}>

    <Grid xs={1} sm={14} item>
      <h3>Log In</h3>
      <h4>Once logged in, users will click on this button to enter the sign up details they entered in the Sign Up form. This enables users to access their account, which contains the sandwiches they have added the cart </h4>
    </Grid> 

  </Grid>
</CardContent>
</Card>

<Card>
<CardContent style={{flex:1, backgroundColor:'#ff0000'}} align={'Center'}>
  <Grid container={1} direction={"row"} spacing={5}>

    <Grid xs={1} sm={14} item>
      <h3>Log Out</h3>
      <h4>As the name implies, users may click this button to log out of their account. The contents of the cart will remain even when you're logged out, so you can continue shopping from where you left off from </h4>
    </Grid> 

  </Grid>
</CardContent>
</Card>

<Card>
<CardContent style={{flex:1, backgroundColor:'#ffdd00'}} align={'Center'}>
  <Grid container={1} direction={"row"} spacing={5}>

    <Grid xs={1} sm={14} item>
      <h3>Home Page</h3>
      <h4>Most likely the page you will be greeted to once you open the website. From the navbar, you can access a few other pages</h4>
    </Grid> 

  </Grid>
</CardContent>
</Card>


</div>
  );
};
export default Help;