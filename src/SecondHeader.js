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



export default function SecondHeader() {
    return (
        <AppBar position="static"> {/*This sets the postioning of the bar*/}
          <Toolbar> {/*This creates the blue bar at the top of the screeen*/} 

          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            {/*Above is a drop=down button for 'Menu' and the items are the options you
            can select in the drop-down button. The "href="#/action-#" is a hyperlink that will
            take you to another page in the website, where you're supposed to click the text in white*/}

          <DropdownButton id="dropdown-basic-button" title="Stores">
            </DropdownButton>

            <Button color="inherit">Contact Us</Button> {/*Creates a button that fixes its position.
                                                          The button says "Contact US"*/}

          </Toolbar> {/*Ends the toolbar and (below) appbar in JSX syntax */}
        </AppBar>

    );
  }