import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Rating } from '@mui/material';


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

export default function AddMovie({ movies, setMovies }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [addTitle, setAddTitle] = useState("")
    const [addDescription, setAddDescription] = useState("")
    const [addPosterUrl, setAddPosterUrl] = useState("")
    const [addRating, setAddRating] = useState(0)
    const [addTrailer, setAddTrailer] = useState("")

    const AddMovieFunction = () => {
        if (addTitle === "" || addDescription === "" || addPosterUrl === "" || addRating === 0) {
            alert("All fields are required")
        } else {
            setMovies([
                ...movies,
                {
                    id: Math.random(),
                    title: addTitle,
                    description: addDescription,
                    posterUrl: addPosterUrl,
                    rating: addRating,
                    trailer: addTrailer
                }
            ])
            setAddTitle("")
            setAddDescription("")
            setAddPosterUrl("")
            setAddRating(0)
            handleClose()
        }
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained">Add Movie</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new movie
                    </Typography>
                    <TextField
                        label="Movie Title"
                        variant="filled"
                        fullWidth
                        onChange={(e) => setAddTitle(e.target.value)} />
                    <TextField
                        label="Movie Description"
                        variant="filled"
                        fullWidth
                        onChange={(e) => setAddDescription(e.target.value)} />
                    <TextField
                        label="Movie Poster URL"
                        variant="filled"
                        fullWidth
                        onChange={(e) => setAddPosterUrl(e.target.value)} />
                    <TextField
                        label="Embed Trailer"
                        variant="filled"
                        fullWidth
                        onChange={(e) => 
                        setAddTrailer(e.target.value)} />
                    <Rating
                        name="simple-controlled"
                        value={addRating}
                        onChange={(event, newValue) => {
                            setAddRating(newValue);
                        }}
                    />
                    <br />
                    <Button variant="contained" onClick={AddMovieFunction} >Add Movie</Button>
                </Box>
            </Modal>
        </div>
    );
}