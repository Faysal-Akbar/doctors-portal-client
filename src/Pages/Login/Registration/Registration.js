import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Registration = () => {
    const {user, registerUser, isLoading, authError} = useAuth();

    const history = useHistory();
    const [registerData, setRegisterData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleLoginSubmit = (e) => {
        if(registerData.password !== registerData.password2){
            alert("Uffs! password didn't match")
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{my: 10}}>
                    <Typography variant="h6" gutterBottom sx={{color: 'text.secondary'}}>
                        Registration
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                        sx={{width: '75%', m:1}}
                        id="standard-basic"
                        name="name"
                        onBlur={handleOnBlur}
                        label="Your Name"
                        variant="standard" />
                        <TextField
                        sx={{width: '75%', m:1}}
                        id="standard-basic"
                        name="email"
                        onBlur={handleOnBlur}
                        label="Your Email"
                        variant="standard" />
                        <TextField
                        sx={{width: '75%', m:1}}
                        id="standard-basic"
                        name="password"
                        onBlur={handleOnBlur}
                        label="Your Password"
                        type="password"
                        variant="standard" />
                        <TextField
                        sx={{width: '75%', m:1}}
                        id="standard-basic"
                        name="password2"
                        onBlur={handleOnBlur}
                        label="re type Your Password"
                        type="password"
                        variant="standard" />
                        <Button type="submit" variant="contained" sx={{width: '75%', m:1}}>REGISTER</Button>
                        <NavLink to="/login">
                            <Button variant="text">ALREADY REGISTERED? LOGIN</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">REGISTRATION SUCCESSFUL</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registration;