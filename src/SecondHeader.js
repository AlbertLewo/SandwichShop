import * as React from "react";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import './App.css'; from 



export default function SecondHeader() {
    return (
        <AppBar position="static"> {/*This sets the postioning of the bar*/}
          <Toolbar> {/*This creates the blue bar at the top of the screeen*/} 
          
          <Button>
          <Link to="/" color='secondary'>Home Page </Link>
          </Button>

          <Button>
            <Link to="/Stores" color='secondary'>Stores </Link>
          </Button>

           {/* Placing Link in Button*/} 
            <Button>
              <Link to="/Contact" color='secondary'>Contact Us </Link>
            </Button>
          
          </Toolbar> {/*Ends the toolbar and (below) appbar in JSX syntax */}
        </AppBar>

    );
  }