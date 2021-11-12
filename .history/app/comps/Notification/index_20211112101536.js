import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: white;
width: 350px;
height: 100%;
box-shadow: 0px 4.427648067474365px 47.59721755981445px 0px #00000017;
flex-direction: column;

`

const TopCont = styled.div`
display:flex;
align-items:center;
margin-top: 15px;

`
const Icon = styled.img`
width: 30px;
height: 30px;
margin-left: 30px;

`
const Title = styled.div`
font-size: 20px;
font-weight: 700;
color: #383838;
margin-left: 60px;
`

const FirstCont = styled.div`
display:flex;
flex-direction:column;

`

const Now = styled.div`
font-size: 18px;
font-weight: 700;
color: #3E3D3D;
margin-left: 30px;
margin-top: 30px;
`

const NotiCont = styled.div`
display:flex;
margin: 30px 30px 30px 30px;

`

const RightCont = styled.div`
display:flex;
flex-direction: column;
`

const Avatar = styled.img`
width: 50px;
height: 50px;
`
const Message = styled.div`
font-size: 15px;
margin-left: 20px;
color: #3E3D3D;
`

const Span = styled.span`
font-weight: 700;
`

const ButtonCont = styled.div`

`

const Button1=styled.button`
border:none;
background-color: #9CD778;
padding: 20px;
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
            <Title className="opensans">Notification</Title>
        </TopCont>

        <FirstCont>
            <Now className="opensans">Now</Now>
            <NotiCont>
                <Avatar src="Avatar2.png"/>
                <RightCont>
                <Message><Span>Hailey Kim</Span> finished her Garbage task!</Message>
                <ButtonCont>
                <Button1>Accept</Button1>
                </ButtonCont>
                </RightCont>

            </NotiCont>
            

        </FirstCont>
              
            </NavCont>   
}

export default Notification;
