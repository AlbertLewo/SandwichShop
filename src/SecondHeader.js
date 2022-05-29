import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import {Link} from "react-router-dom";



export default function SecondHeader() {
    return (
        <AppBar position="static"> {/*This sets the postioning of the bar*/}
          <Toolbar> {/*This creates the blue bar at the top of the screeen*/} 
          
          <Button>
          <Link to="/">Home Page </Link>
          </Button>

          <Button>
            <Link to="/Stores" color="inherit">Stores </Link>
          </Button>

           {/* Placing Link in Button*/} 
            <Button>
              <Link to="/Contact" color="white">Contact Us </Link>
            </Button>
          
          </Toolbar> {/*Ends the toolbar and (below) appbar in JSX syntax */}
        </AppBar>

    );
  }