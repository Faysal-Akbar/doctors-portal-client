import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {id: 1, name: 'Teeth Orthodontics', time: '8.00 AM - 9.00 AM', price: 25, space: 10},
    {id: 2, name: 'Cosmetic Dentistry', time: '10.00 AM - 11.30 AM', price: 30, space: 18},
    {id: 3, name: 'Teeth Cleaning', time: '5.00 PM - 6.00 PM', price: 35, space: 15},
    {id: 4, name: 'Cavity Protection', time: '8.00 PM - 9.00 PM', price: 40, space: 10},
    {id: 5, name: 'Cosmetic Dentistry', time: '9.00 AM - 10.00 AM', price: 45, space: 5},
    {id: 6, name: 'Cavity Protection', time: '7.00 PM - 6.00 PM', price: 50, space: 8},
]

const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography variant="h4" sx={{color: 'info.main', mb: 5, fontWeight: 600}}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert sx={{mb: 5}} severity="success">BOOKING SUCCESSFUL</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;