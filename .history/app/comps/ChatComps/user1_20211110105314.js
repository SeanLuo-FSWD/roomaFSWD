import React from 'react'
import styled from 'styled-components'
import Chat from '../../pages/chat'

const NavCont = styled.div`
display:flex;
width: 50%;
height: 15%;
align-items:center;
margin: 60px;


`
const ProfileCont = styled.div`
display:flex;
justify-content:center;
align-items:center;

`
const Avatar = styled.img`
width: 60px;
height: 60px;
margin-right: 20px;

`
const InfoCont = styled.div`
display:flex;
flex-direction: column;


`
const ChatBubble = styled.div`
display:flex;
order: 0;
align-self: center;
flex-grow: 0;
background: #F2F2F2;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.08);
border-radius: 0px 24px 24px 24px;
color: #1A1A1A;
padding: 15px;
margin-top: 10px;
font-size: 17px;
`
const Name = styled.div`
font-size: 21px;
font-weight: 500;
color: #181135;
`

const Time=styled.div`
color: #9A9999;
font-size: 14px;
margin-top: 50px;
margin-left: 15px;
margin-right: 10px;
`

const User1 = ({
  
  
  
  }) => {

    return <NavCont>
                <ProfileCont>
                    <Avatar src="Avatar2.png"/>
                </ProfileCont>

                <InfoCont>
                    <Name>Floyd Miles</Name>
                    <ChatBubble className="opensans">Helasdflkjasflka</ChatBubble>
                </InfoCont>

                <Time>6:00 PM</Time>
            </NavCont>   
}

export default User1;
