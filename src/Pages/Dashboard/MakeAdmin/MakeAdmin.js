import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email}

        fetch('https://blooming-lake-91301.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
        })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                label="EMAIL"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
                /> <br/><br/>
                <Button type="submit" variant="contained">MAKE ADMIN</Button>
            </form>
            {success && <Alert severity="success">ADMIN MADE SUCCESSFULLY</Alert>}
        </div>
    );
};

export default MakeAdmin;