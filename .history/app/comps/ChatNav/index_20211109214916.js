import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: #FAFAFA;
width: 80%;
height: 15%;
border-radius: 16px;
margin-top: 40px;
`


const ProfileCont = styled.div`
background-color: red;
flex: 2;
`
const Img1 = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
border: 2px solid white;
`
const InfoCont = styled.div`
background-color: blue;
flex: 4;
`

const TimeCont = styled.div`
background-color: yellow;
flex:2;

`

const ChatNav = ({
  bgcolor='#FFFFFF',
  heading="All Roommates(5)",
  ps="this is paragraph",
  src="http://placekitten.com/48/48",
  
  onClick=()=>{}  
  
  }) => {

    return <NavCont bgcolor={bgcolor}  onClick={onClick}>
                <ProfileCont>
                <Img1 src="/avatar.png"/>

                </ProfileCont>
                <InfoCont></InfoCont>
                <TimeCont></TimeCont>
            </NavCont>   
}

export default ChatNav;
