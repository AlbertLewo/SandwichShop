import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
import SignUp from './SignUp.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    
    setOpen2(true);
    setOpen(false);

  };
  const handleClose2 = () => setOpen2(false);

    return (
        <AppBar position="static" elevation={0}>
          <Toolbar>
            {/*Inside the IconButton, we 
             can render various icons*/}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*This is a simple Menu 
               Icon wrapped in Icon */}
              <MenuIcon />
            </IconButton>
            {/* The Typography component applies 
             default font weights and sizes */}
    
            <Typography variant="h6" 
              component="div" sx={{ flexGrow: 1 }}>
              Sandwich Shop Header
            </Typography>
            <Button color="inherit">Cart</Button>
            {/* Copy + Paste into another component */}
            <Button onClick={handleOpen} color="inherit">Login</Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container justify="flex-end" alignItems="flex-end">
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
            Login to your account 
          </Typography>
          <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
            Please enter your login details (username and password) or click 'Sign Up' to create an account.
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Grid>
        </Box>
      </Modal>
      <SignUp />
    </Toolbar>
  </AppBar>


    );
  }
