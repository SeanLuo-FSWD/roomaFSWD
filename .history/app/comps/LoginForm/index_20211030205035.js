import react from 'react';
import * as React from 'react';
import styled from 'styled-components';


const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Heading =styled.div`
font-size: 53px;
font-weight: 700;

`
const Input = styled.input`

padding: 20px 10px 10px 20px;
`



const LoginForm = ({



}) => {
   

    return <Cont>
        <Heading className="ubuntu">Login</Heading>
        <Input type="text" placeholder="Email"></Input>
        
    </Cont>
}

export default LoginForm;