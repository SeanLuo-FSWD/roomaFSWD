import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: white;
width: 300px;
height: 100%;
box-shadow: 0px 4.427648067474365px 47.59721755981445px 0px #00000017;

`

const TopCont = styled.div`
display:flex;

`
const Icon = styled.img`
width: 30px;
height: 30px;

`
const Title = styled.div`


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

        <TopCont>
            <Icon src="/arrow.svg"/>
            <Title>Notification</Title>
        </TopCont>
              
            </NavCont>   
}

export default Notification;
