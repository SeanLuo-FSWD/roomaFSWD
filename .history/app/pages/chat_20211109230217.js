import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import MemberProfile from'../comps/MemberProfile';
import NavBar2 from '../comps/NavBar2'
import AddMembers from '../comps/AddMembers';
import ProfileInfo from '../comps/ProfileInfo';
import Button from '../comps/Button';
import ChatNav from '../comps/ChatNav';

import {useState} from 'react';



const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;

`
//left cont
const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:2;
border-right: 1px #D6D6D6 solid;
`
const TopCont = styled.div`
display:flex;
justify-content: space-between;
margin: 30px 50px 0px 50px;
align-items:center;
`
const Heading = styled.div`
font-size: 34px;
font-weight: 700;

`
const Icon = styled.img`

`

//Chat Nav cont
const NavCont = styled.div`
display:flex;
width: 100%;
height: 100%;
flex-direction: column;
align-items:center;

`


// Right Container 

const RightCont = styled.div`
display:flex;
flex:3;
flex-direction: column;
`


export default function Members() {
  const [buttonstate5, setButtonState5] = useState(0);
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }
  
  return (
  
    <MainCont>
           <NavBar2
    onContClick={()=>{
      GlobalNavClick();
    }}
    width={buttonstate5 === 1 ? '140px' : '288px'}
    display={buttonstate5 === 1 ? 'none' : 'flex'}
    displayLogo={buttonstate5 === 1 ? 'flex' : 'none'}
    displayHome={buttonstate5 === 1 ? 'none' : 'block'}
    displayTask={buttonstate5 === 1 ? 'none' : 'block'}
    displayChat={buttonstate5 === 1 ? 'none' : 'block'}
    displayMember={buttonstate5 === 1 ? 'none' : 'block'}
    displayCommunity={buttonstate5 === 1 ? 'none' : 'block'}
    displaySetting={buttonstate5 === 1 ? 'none' : 'block'}
    alignItems={buttonstate5 === 1 ? 'center':'unset'}
    justifyContent={buttonstate5 ===1 ? 'center':'space-even'}
    />
        <LeftCont>
        <TopCont>
        <Heading className="ubuntu">Chat</Heading>
        <Icon src="/chat.svg"/>
        </TopCont>

        <NavCont>
        <ChatNav/>
        <ChatNav bgcolor="white" info="Darleen, Deavon"/>
        <ChatNav bgcolor="white" info="Floyd Miles"/>
        <ChatNav bgcolor="white" info="Devon Lane"/>
        
        </NavCont>
        </LeftCont>

        {/* Right Container */}
        <RightCont>
    

    

        


        </RightCont>
        

      
    </MainCont>
  
  )
}
