import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: #FAFAFA;
width: 80%;
height: 13%;
border-radius: 16px;
margin-top: 40px;
`

//Profile
const ProfileCont = styled.div`
flex: 2;
display:flex;
justify-content: center;
align-items:center;
margin-left: 10px;
`
const Img1 = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
border: 2px solid white;
`
const Img2 = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
border: 2px solid white;
position: relative;
right: 20px;
bottom: 15px;
displayflex;
`

//Info
const InfoCont = styled.div`
flex: 4;
display:flex;
flex-direction: column;
justify-content: center;
margin-left: 20px;
`
const Name = styled.div`
font-size: 19px;
font-weight: 600;
color:#3E3D3D;
margin-bottom: 5px;

`
const Msg = styled.div`
font-size: 15px;
color: #979797;

`

//Time
const TimeCont = styled.div`
flex:2;
display:flex;
justify-content: center;
align-items:center;

`
const Time = styled.div`
font-size: 13px;
color:#7E7E7E;
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
                <Img2 src="/Avatar2.png"/>
                

                </ProfileCont>

                <InfoCont>
                    <Name className="opensans">All Roommates (5)</Name>
                    <Msg  className="opensans">Hello Everyone!</Msg>
                </InfoCont>
                <TimeCont>
                    <Time className="opensans">5 min</Time>
                </TimeCont>
            </NavCont>   
}

export default ChatNav;
