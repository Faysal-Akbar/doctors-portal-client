import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, email, image} = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        width="80%"
        height="60%"
        image={`data:image/png;base64,${image}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
    </Card>
            
        </Grid>
    );
};

export default Doctor;