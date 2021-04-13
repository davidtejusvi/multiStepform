import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const Address = ({formData, setForm, navigation}) => {
    const {address, city, state, zip } = formData;
    return (
        <Container maxWidth="xs">
        <h3>Address</h3>

       { /* Address field*/}

        <TextField 
        label = "Address"
        value = "address"
        value = {address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth/>

        {/* City field*/}

        <TextField 
        label = "City"
        value = "city"
        value = {city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth/>

        {/* State field*/}

        <TextField 
        label = "State"
        value = "state"
        value = {state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth/>

        {/* Zip Code field*/}

        <TextField 
        label = "Zip Code"
        value = "zip"
        value = {zip}
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
