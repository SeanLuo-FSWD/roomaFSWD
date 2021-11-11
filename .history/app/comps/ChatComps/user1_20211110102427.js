import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: red;
width: 50%;
height: 15%;

`
const ProfileCont = styled.div`
display:flex;
flex:1;
background: blue;
justify-content:center;
align-items:center;
`
const Avatar = styled.img`
width: 50px;
height: 50px;

`
const InfoCont = styled.div`
display:flex;
flex:3;
background: yellow;
`
const ChatBubble = styled.div`
flex: none;
order: 0;
align-self: center;
flex-grow: 0;
margin: 0px 4.66667px;
`


const User1 = ({
  
  
  
  }) => {

    return <NavCont>
                <ProfileCont>
                    <Avatar src="Avatar2.png"/>
                </ProfileCont>
                <InfoCont></InfoCont>
            </NavCont>   
}

export default User1;
