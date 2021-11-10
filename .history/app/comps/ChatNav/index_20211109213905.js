import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
justify-con
`
const ContentCont = styled.div`
display:flex;
flex-direction:row;

`
const Icon = styled.img`
width:60px;
height:60px;
justify-content:center;
align-items:center;
border-radius: 50%;
border: 2px solid white;

`
const ContDetail = styled.div`
display:flex;
flex-direction:column;
margin:5px;
`
const Heading = styled.h4`
margin:0;
`
const Ps = styled.p`
margin:5px

`
const ChatNav = ({
  bgcolor='#FFFFFF',
  heading="All Roommates(5)",
  ps="this is paragraph",
  src="http://placekitten.com/48/48",
  
  onClick=()=>{}  
  
  }) => {

    return <NavCont bgcolor={bgcolor}  onClick={onClick}>
                
            </NavCont>   
}

export default ChatNav;
