import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: '150px',
    backgroundPosition: 'cover',
    backgroundColor: 'rgba(41, 58, 80, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    
};

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                    style={{width: 450, marginTop: '-125px'}}
                    src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                    }}>
                <Box>
                    <Typography style={{color: 'rgb(112, 209, 220)'}} variant="h6" sx={{mt: 5, mb: 4, fontWeight: 500}}>
                        Appointment
                    </Typography>
                    <Typography style={{color: 'white'}} variant="h4" sx={{fontWeight: 600}}>
                        Make An Appointment Today
                    </Typography>
                    <Typography style={{color: 'white'}} sx={{mb: 4, mt: 4, fontWeight: 500, fontSize: 15}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, pariatur tenetur, quibusdam impedit officia nihil aliquam molestiae et vitae libero cum velit a facilis nesciunt corrupti minus eos ipsum voluptates.
                    </Typography>
                    <Button style={{backgroundColor: 'rgb(112, 209, 220)'}} variant="contained">Learn More</Button>
                </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;