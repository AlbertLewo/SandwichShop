import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SignUp from './SignUp.js';
import Login from './Login.js';
import Cart from './Cart.js'

export default function Header() {
    return (
        <AppBar position="static" elevation={0} style={{ background: '#F0967D' }}>
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
              component="div" sx={{ flexGrow: 1 }} >
              Big Munch Sandwiches
            </Typography>
            
      <Cart />
      <Login />
      <SignUp />
    </Toolbar>
  </AppBar>


    );
  }
