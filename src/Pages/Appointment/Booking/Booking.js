import React from 'react';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);
    return (
            <>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{py: 5}}>
                        <Typography variant="h5" gutterBottom sx={{fontWeight: 600, color: 'info.main'}}>
                            {name}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>
                            {time}
                        </Typography>
                        <Typography gutterBottom variant="caption" sx={{fontWeight: 600, color: 'text.secondary'}}>
                            {space} SPACES AVAILABLE
                        </Typography> <br /> <br />
                        <Button onClick={handleOpenBooking} variant="contained">BOOK APPOINTMENT</Button>
                    </Paper>
                </Grid>
                <BookingModal
                    booking={booking}
                    openBooking={openBooking}
                    handleCloseBooking={handleCloseBooking}
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                ></BookingModal>
            </>
    );
};

export default Booking;