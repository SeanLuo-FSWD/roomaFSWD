import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: #FAFAFA;
width: 80%;
height: 20%;
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
