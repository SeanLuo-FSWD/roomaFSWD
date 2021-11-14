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
const InfoCont = styled.div`
display:flex;
flex:1;
background: yellow;
`



const User1 = ({
  
  
  
  }) => {

    return <NavCont>
                <ProfileCont></ProfileCont>
            </NavCont>   
}

export default User1;
