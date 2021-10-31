import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const Wrap = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items:center;

`
const Animation = styled.img`
width: 550px;
margin-left:auto;
margin-right:auto;

`

const Heading = styled.div`

`


const Tutorial = ({


}) => {
    return <Cont>
        <Wrap>
        <Animation src="/login-animation.svg"/>
        <Heading>Welcome Back</Heading>
        </Wrap>
    </Cont>
}

export default Tutorial;