import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const {user, loginUser, authError, signInWithGoogle} = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation()
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{my: 10}}>
                    <Typography variant="h6" gutterBottom sx={{color: 'text.secondary'}}>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                        sx={{width: '75%', m:1}}
                        id="standard-basic"
                        name="email"
                        onChange={handleOnChange}
                        label="Your Email"
                        variant="standard" />
                        <TextField
                        sx={{width: '75%', m:1}}
                        id="standard-basic"
                        name="password"
                        onChange={handleOnChange}
                        label="Your Password"
                        type="password"
                        variant="standard" />
                        <Button type="submit" variant="contained" sx={{width: '75%', m:1}}>LOGIN</Button>
                        <NavLink to="/registration">
                            <Button variant="text">NEW USER? PLEASE REGISTER</Button>
                        </NavLink>
                    </form>
                    <p>------------------OR-------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    {user.email && <Alert severity="success">LOGIN SUCCESSFUL</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;