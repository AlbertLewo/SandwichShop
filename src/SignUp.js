import { useState } from "react";
import * as React from 'react'
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

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

export default function SignUp() {
    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => {
    setOpen2(true);

  };
  const handleClose2 = () => setOpen2(false);

    return (
        <div>
    <Button onClick={handleOpen2} color="inherit">Sign Up</Button>
    <Modal
    open={open2}
    onClose={handleClose2}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
    <Grid>
    <Box component="form" noValidate sx={{ mt: 1 }}>
    <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
        Sign Up to create an account 
    </Typography>
    <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
        Please enter your login details (username and password).
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
        Sign Up
        </Button>
    </Box>
    </Grid>
    </Box>
    </Modal>
    </div>
    )
}