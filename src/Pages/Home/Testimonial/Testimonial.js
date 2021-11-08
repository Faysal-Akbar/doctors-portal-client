import { CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <Container sx={{my: 10}}>
            <Typography variant="h6" sx={{textAlign: 'left', color: 'info.main'}}>
                TESTIMONIAL
            </Typography>
            <Typography variant="h4" sx={{textAlign: 'left', fontWeight: 600}}>
                What's Our Patients <br /> Says
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{p: 5, mt: 8}}>
                    <Typography variant="h6" sx={{textAlign: 'left', fontSize: 14, color: 'text.secondary', fontWeight: 600, mb: 5}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel exercitationem fugiat dicta, omnis cumque veritatis voluptatum animi fuga delectus temporibus. Quos excepturi, voluptas esse sint mollitia voluptatibus omnis repellendus!
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography>
                        <CardMedia
                            component="img"
                            sx={{ width: 50 }}
                            image={people1}
                            alt="Live from space album cover"
                        />
                        </Typography>
                        <Box sx={{ml: 3}}>
                            <Typography variant="h6" sx={{fontWeight: 600, color: 'info.main', textAlign: 'left'}}>
                                Winson Harry
                            </Typography>
                            <Typography variant="caption" sx={{fontWeight: 600, textAlign: 'left'}}>
                                California
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{p: 5, mt: 8}}>
                    <Typography variant="h6" sx={{textAlign: 'left', fontSize: 14, color: 'text.secondary', fontWeight: 600, mb: 5}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel exercitationem fugiat dicta, omnis cumque veritatis voluptatum animi fuga delectus temporibus. Quos excepturi, voluptas esse sint mollitia voluptatibus omnis repellendus!
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography>
                        <CardMedia
                            component="img"
                            sx={{ width: 50 }}
                            image={people2}
                            alt="Live from space album cover"
                        />
                        </Typography>
                        <Box sx={{ml: 3}}>
                            <Typography variant="h6" sx={{fontWeight: 600, color: 'info.main', textAlign: 'left'}}>
                                Winson Harry
                            </Typography>
                            <Typography variant="caption" sx={{fontWeight: 600, textAlign: 'left'}}>
                                California
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{p: 5, mt: 8}}>
                    <Typography variant="h6" sx={{textAlign: 'left', fontSize: 14, color: 'text.secondary', fontWeight: 600, mb: 5}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel exercitationem fugiat dicta, omnis cumque veritatis voluptatum animi fuga delectus temporibus. Quos excepturi, voluptas esse sint mollitia voluptatibus omnis repellendus!
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography>
                        <CardMedia
                            component="img"
                            sx={{ width: 50 }}
                            image={people3}
                            alt="Live from space album cover"
                        />
                        </Typography>
                        <Box sx={{ml: 3}}>
                            <Typography variant="h6" sx={{fontWeight: 600, color: 'info.main', textAlign: 'left'}}>
                                Winson Harry
                            </Typography>
                            <Typography variant="caption" sx={{fontWeight: 600, textAlign: 'left'}}>
                                California
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonial;