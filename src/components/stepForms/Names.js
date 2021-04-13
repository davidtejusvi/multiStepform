import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const Names = ({formData, setForm, navigation}) => {
    const {firstName, lastName, nickName } = formData;
    return (

        <Container maxWidth="xs">
            <h3>Names</h3>
           {/* Firstname field*/}
            <TextField 
            label = "First Name"
            value = "firstName"
            value = {firstName}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>

            {/* Last Name field*/}

            <TextField 
            label = "Last Name"
            value = "lastName"
            value = {lastName}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>

            {/* Nick Name field*/}

            <TextField 
            label = "Nick Name"
            value = "nickName"
            value = {nickName}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>

            {/* Button */}
            
            <Button 
                variant="contained" 
                fullWidth 
                color="primary" 
                style={{marginTop :"1rem"}}
                onClick={()=>navigation.next()}
            >
                Next
            </Button>

            
        </Container>
    )
}



