import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
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

export default function Cart() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button onClick={handleOpen} color="inherit">Cart</Button>
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
                Your Cart 
            </Typography>
            
            <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                What you purchased goes here
            </Typography>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
            Go to Payment

            </Button>
    </Box>
    </Grid>
    </Box>
    </Modal>
    </div>
)
}