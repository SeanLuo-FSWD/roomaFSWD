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



const User1 = ({
  
  
  
  }) => {

    return <NavCont>
                <ProfileCont>
                    <Avatar/>
                </ProfileCont>
                <InfoCont></InfoCont>
            </NavCont>   
}

export default User1;
