import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Contact = ({formData, setForm, navigation}) => {
    const {phone, email } = formData;
    return (
        <Container maxWidth="xs">
            <h3>Contact</h3>

            { /* Phone field*/}

            <TextField 
            label = "Phone"
            value = "phone"
            value = {phone}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>

            {/*email field*/}

            <TextField 
            label = "Email"
            value = "email"
            value = {email}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>

            {/* Button field*/}
            
            <div style={{ marginTop: '1rem'}}>
                <Button 
                variant="contained" 
                color="secondary" 
                style={{marginRight :"1rem"}}
                onClick={()=>navigation.previous()}
                >
                Back
                </Button>

                <Button 
                variant="contained" 
                color="primary" 
                
                onClick={()=>navigation.next()}
                >
                Next
                </Button>
            </div>
            
        </Container>
    )
}
