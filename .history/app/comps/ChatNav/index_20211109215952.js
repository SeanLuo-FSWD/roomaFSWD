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

//Profile
const ProfileCont = styled.div`
flex: 2;
display:flex;
justify-content: center;
align-items:center;
`
const Img1 = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
border: 2px solid white;
`

//Info
const InfoCont = styled.div`
background-color: blue;
flex: 4;
display:flex;
flex-direction: column;
justify-content: center;
`
const Name = styled.div`


`
const Msg = styled.div`

`

//Time
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
                <Img1 src="/Avatar2.png"/>

                </ProfileCont>

                <InfoCont>
                    <Name>All Roommates(5)</Name>
                    <Msg>Hello Everyone!</Msg>
                </InfoCont>
                <TimeCont></TimeCont>
            </NavCont>   
}

export default ChatNav;
