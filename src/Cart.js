import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { useState } from "react";
import axios from 'axios';
import Paper from '@mui/material/Paper';

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
    overflow: 'scroll',
};

const style1 = {
    overflow: 'scroll',
    maxHeight: '100%',
    position: 'absolute'
}

export default function Cart({ loggedInUsername }) {
    const [open, setOpen] = useState(false);
    const [sandwiches, setSandwiches] = useState([]);
    const handleClose = () => setOpen(false);

    const handleOpen = () => {
        console.log("Working")
        console.log(loggedInUsername)
        setOpen(true);
        const userObj = JSON.stringify({
            username: loggedInUsername
        });
        axios.post("/api/readcart", userObj, { headers: { "Content-Type": "application/json" } })
            .then(res => {
                setSandwiches(res.data.sandwiches)
                console.log(res.data.sandwiches)
            })
    };

    return (
        <div>
            <Button onClick={handleOpen} color="inherit">Cart</Button>
            <Modal
                sx={style1}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container justify="flex-end" alignItems="flex-end">
                        <Box component="form" noValidate sx={{ mt: 1 }}>


            {
                sandwiches.length == 0
                            ?
                            <>
                                <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
                                    Your Cart 
                                </Typography>

                                <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                                    What you purchased goes here
                                </Typography>
                            </>
                            :                          

                            <>
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
            }

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