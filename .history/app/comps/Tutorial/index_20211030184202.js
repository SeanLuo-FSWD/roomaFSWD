import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const LogoCont = styled.img`
width: 100px;
margin: 20px;

`


const Tutorial = ({


}) => {
    return <Cont>
        <LogoCont src="/Mainlogo.png"/>
    </Cont>
}

export default Tutorial;