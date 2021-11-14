import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:80%;
height:100%;
background-color:${props=>props.bgcolor};
margin:10px;
border-radius:50px;
`
const ContentCont = styled.div`
display:flex;
flex-direction:row;

`
const Icon = styled.img`
width:48px;
height:48px;
justify-content:center;
align-items:center;

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
  heading="this is heading",
  ps="this is paragraph",
  src="http://placekitten.com/48/48",
  
  onClick=()=>{}  
  
  }) => {

    return <NavCont bgcolor={bgcolor}  onClick={onClick}>
                <ContentCont>
                    <Icon src={src}></Icon>
                </ContentCont>
                <ContDetail>
                    <Heading>{heading}</Heading>
                    <Ps>{ps}</Ps>
                </ContDetail>   
            </NavCont>   
}

export default ChatNav;
