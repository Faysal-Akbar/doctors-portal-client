import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    marginTop: '20px',
}

const verticleAlign = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'between',
    height: '450px'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{textAlign: 'left'}} style={verticleAlign}>
                    <Box>
                        <Typography variant="h3" sx={{fontWeight: 600}}>
                            Your New Smile <br /> Start Here
                        </Typography>
                        <Typography sx={{color: 'gray', fontWeight: 500, fontSize: 15, my: 4}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti soluta autem culpa! Earum impedit est hic ab quod eos!
                        </Typography>
                        <Button style={{backgroundColor: 'rgb(112, 209, 220)'}} variant="contained">GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticleAlign}>
                    <img style={{width: '500px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;