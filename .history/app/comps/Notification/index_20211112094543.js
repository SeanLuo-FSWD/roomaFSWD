import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: red;
width: 300px;
height: 100%;
`


const Notification= ({
  bgcolor="#FAFAFA",
  display="flex",
  marginleft="25px",
  margintop="40px",
  info="All Roommates (5)",
  msg="Hello Everyone!",
  
  onClick=()=>{}  
  
  }) => {

    return <NavCont>
              
            </NavCont>   
}

export default Notification;
