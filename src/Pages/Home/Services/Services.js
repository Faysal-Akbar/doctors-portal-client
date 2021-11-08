import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {name: 'Fluoride Treatment', description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist.', img: fluoride},
    {name: 'Cavity Filling', description: 'Fillings treatment are typically professional treatments containing a high concentration of fluoride that are  a dentist or hygienist.', img: cavity},
    {name: 'Teeth Whitening', description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist.', img: whitening}
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 500, mt: 5, color: 'primary.main' }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 600, mb: 10 }} variant="h4" component="div">
                Services We Provide
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service = {service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;