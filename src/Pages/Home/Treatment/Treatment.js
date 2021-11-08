import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png';

const Treatment = () => {
    return (
        <Container sx={{my: 10}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{width: 350}} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{textAlign: 'left', mt: 6}}>
                    <Typography variant="h4" sx={{fontWeight: 600, mb: 4}}>
                        Exceptional Dental<br />Care, on Your Terms
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight: 600, fontSize: 14, color: 'text.disabled'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto. Consequuntur doloribus repellat quisquam, repudiandae deserunt doloremque voluptatibus minus. Nesciunt architecto animi culpa. Sit sapiente, eos, ea maxime in libero, voluptatum quibusdam tenetur doloremque voluptatibus ullam voluptates ipsa enim aspernatur repellendus quasi possimus quidem! Quibusdam molestias repellendus sequi nobis ducimus!
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: 'rgb(112, 209, 220)'}} sx={{mt: 3}}>LEARN MORE</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Treatment;