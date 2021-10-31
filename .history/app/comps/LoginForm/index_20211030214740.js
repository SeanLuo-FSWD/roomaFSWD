import react from 'react';
import * as React from 'react';
import styled from 'styled-components';





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
const Input = styled.input`

padding: 20px;
border: #C8C8C8 1px solid;
min-width: 420px;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: 50px;

`
const Link = styled.button`
background-color: transparent;
border: none;
font-size: 17px;
font-weight: 700;
`


const LoginForm = ({



}) => {
   

    return <Cont>
        <Heading className="ubuntu">Login</Heading>
        <Input className="opensans" type="text" placeholder="Email"  ></Input>
        <Input className="opensans" type="text" placeholder="Password"  ></Input>
        <Link className="opensans">Forgot Password?</Link>

      
        
    </Cont>
}

export default LoginForm;