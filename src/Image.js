import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from "@mui/material/Button";
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '200%',
  maxHeight: '100%',
}); {/* Sizing, positioning and margin of images */ }

export default function ComplexGrid({ isLoggedIn, loggedInUsername }) {
  const [sandwiches, setSandwiches] = useState([]);
  useEffect(() => {
    axios.get("/api/getsandwiches")
      .then(res => {
        console.log(res)
        setSandwiches(res.data.data)
      });
  }, []);

  const handleAddSandwich = (sandwich) => async e => {
    e.preventDefault();
    console.log(sandwich)

    const sandwichObj = JSON.stringify({
      username: loggedInUsername,
      sandwich: sandwich
    });

    axios.post("/api/cartadd", sandwichObj, { headers: { "Content-Type": "application/json" } }
    ).then((response) => {
      if (response.data.status == '200') {
        alert("Item added to cart")
      }
    });
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Most Popular Sandwiches</h1>
      <Helmet>
        <style>{'body { background-color: #FF7779}'}</style>
      </Helmet>
      {/* Changes the colour of the background at the top of the page. Original code */}

      {
        sandwiches.map(s => (
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: '100%',
              flexGrow: 1,
              backgroundColor: s.color1
            }}
          >
            <Grid container spacing={12}> {/* Spacing between image and text/buttons */}
              <Grid item>
                <ButtonBase sx={{ width: 140, height: 240, marginLeft: 10 }}>
                  <Img src={s.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={20} sm container>
                <Grid item xs container direction="column" spacing={4}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {s.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {s.ingredients.join(", ")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {s.info}
                    </Typography>
                  </Grid>
                  {/* The code above adds text to the grid component. This was code that was modified from the MUI website */}
                  <Grid item>
                    {
                      isLoggedIn ?
                        <>
                          <Button color="inherit" onClick={handleAddSandwich(s)}>Add to Cart</Button>
                        </>
                        :
                        <>
                        </>
                    }
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    {s.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))
      }
    </>

  );
}
