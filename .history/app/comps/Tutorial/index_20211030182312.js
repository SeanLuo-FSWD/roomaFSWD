import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const Logo = styled.Image`
`


const Tutorial = ({


}) => {
    return <Cont>
       <Logo src="/Mainlogo.svg"></Logo>
    </Cont>
}

export default Tutorial;