import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: ${props=>props.bgcolor};
width: 85%;
height: 13%;
border-radius: 16px;
margin-top: ${props=>props.margintop};
`


const ChatNav = ({
  
  
  onClick=()=>{}  
  
  }) => {

    return <NavCont>
                
            </NavCont>   
}

export default ChatNav;
