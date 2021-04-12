import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const Names = ({formData, setForm, navigation}) => {
    const {firstName, lastName, nickName } = formData;
    console.log(formData);
    return (

        <Container maxWidth="xs">
            <h3>Names</h3>
            <TextField 
            label = "First Name"
            value = "firstName"
            value = {firstName}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>

            <TextField 
            label = "Last Name"
            value = "lastName"
            value = {lastName}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>

            <TextField 
            label = "Nick Name"
            value = "nickName"
            value = {nickName}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>

            <Button variant="contained" fullWidth color="primary" style={{marginTop :"1rem"}}>Next</Button>
        </Container>
    )
}



