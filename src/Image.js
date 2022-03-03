import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import sandwich from './sandwich.jpg'; // with import
import Button from "@mui/material/Button";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '200%', 
    maxHeight: '100%',
  }); {/* Sizing, positioning and margin of images */}
  
  export default function ComplexGrid() {
    return (
      <>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#FFFDD0',
        }}
      >
        <Grid container spacing={12}> {/* Spacing between image and text/buttons */}
          <Grid item>
            <ButtonBase sx={{ width: 140, height: 240, marginLeft: 10}}>
              <Img src={sandwich} />
            </ButtonBase>
          </Grid>
          <Grid item xs={20} sm container>
            <Grid item xs container direction="column" spacing={4}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Sandwich #1
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Lettuce, Tomato, Cheese
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gluten Free
                </Typography>
              </Grid>
              <Grid item>
                <Button color="inherit">Add to Cart</Button>
                <Button color="inherit">Edit Sandwich</Button>
                <Button color="inherit">Buy Single Sandwich</Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      

      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#FFFDD0',
        }}
      >
        <Grid container spacing={12}>
          <Grid item>
            <ButtonBase sx={{ width: 140, height: 240, marginLeft: 10 }}>
              <Img src={sandwich} />
            </ButtonBase>
          </Grid>
          <Grid item xs={15} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Sandwich #2
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Lettuce, Cucumber, Beetroot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gluten Free
                </Typography>
              </Grid>
              <Grid item>
                <Button color="inherit">Add to Cart</Button>
                <Button color="inherit">Edit Sandwich</Button>
                <Button color="inherit">Buy Single Sandwich</Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $13.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#FFFDD0',
        }}
      >
        <Grid container spacing={12}>
          <Grid item>
            <ButtonBase sx={{ width: 140, height: 240, marginLeft: 10}}>
              <Img src={sandwich} />
            </ButtonBase>
          </Grid>
          <Grid item xs={15} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Sandwich #3
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Bacon, Cheese, Tomato
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contains Dairy
                </Typography>
              </Grid>
              <Grid item>
                <Button color="inherit">Add to Cart</Button>
                <Button color="inherit">Edit Sandwich</Button>
                <Button color="inherit">Buy Single Sandwich</Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $15.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#FFFDD0',
        }}
      >
        <Grid container spacing={12}>
          <Grid item>
            <ButtonBase sx={{ width: 140, height: 240, marginLeft: 10}}>
              <Img src={sandwich} />
            </ButtonBase>
          </Grid>
          <Grid item xs={15} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Sandwich #4
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Steak, Onion, Cheese
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contains Dairy
                </Typography>
              </Grid>
              <Grid item>
                <Button color="inherit">Add to Cart</Button>
                <Button color="inherit">Edit Sandwich</Button>
                <Button color="inherit">Buy Single Sandwich</Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $20.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#FFFDD0',
        }}
      >
        <Grid container spacing={12}>
          <Grid item>
            <ButtonBase sx={{ width: 140, height: 240, marginLeft: 10}}>
              <Img src={sandwich} />
            </ButtonBase>
          </Grid>
          <Grid item xs={15} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Sandwich #5
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Salami, Chilli Chicken, Mortadella, Turkey Breast
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cold Meats
                </Typography>
              </Grid>
              <Grid item>
                <Button color="inherit">Add to Cart</Button>
                <Button color="inherit">Edit Sandwich</Button>
                <Button color="inherit">Buy Single Sandwich</Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $16.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </>
      
    );
  }
  