import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from "react";

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

export default function Login() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
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
    </div>
)
}