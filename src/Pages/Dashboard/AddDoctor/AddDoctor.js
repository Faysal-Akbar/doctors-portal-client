import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        if(!image){
            return
        }
        // creating formData for submit file
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://blooming-lake-91301.herokuapp.com/doctors', {
        method: 'POST',
        body: formData
        })
        .then(res => res.json())
        .then(data => {
        if(data.insertedId){
            alert('Doctor inserted Successfully');
        }
        })
        .catch(error => {
        console.error('Error:', error);
        });
        e.preventDefault();
    }

    return (
        <div>
            <h2>Add A Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField  
                label="Name"
                required
                onChange={e => setName(e.target.value)}
                sx={{width: '50%'}}
                variant="standard" />
                <br/>
                <TextField  
                label="Email"
                type="email"
                required
                onChange={e => setEmail(e.target.value)}
                sx={{width: '50%'}}
                variant="standard" />
                <br/> <br/>
                <Input 
                accept="image/*"
                onChange={e => setImage(e.target.files[0])}
                type="file" />
                <Button type="submit" variant="contained">
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;