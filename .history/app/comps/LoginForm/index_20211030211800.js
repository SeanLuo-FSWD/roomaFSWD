import react from 'react';
import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Heading =styled.div`
font-size: 53px;
font-weight: 700;
margin-bottom: 50px;

`


// const Input = styled.input`

// padding: 20px;
// border: #C8C8C8 1px solid;
// min-width: 400px;
// font-size: 19px;
// font-weight: 400;
// border-radius: 10px;

// `



const LoginForm = ({



}) => {
   

    return <Cont>
        <Heading className="ubuntu">Login</Heading>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
       
    </Cont>
}

export default LoginForm;