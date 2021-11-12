import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import NavBar2 from '../comps/NavBar2';
import Invite from '../comps/Invite';
import SettingNavCont from '../comps/SettingNavCont';
import {useState} from 'react';

const Cont = styled.div`
  padding:5px;
  display:flex;
  width:100%;
  height:100%;
  flex-direction:row;
`
const GlbNav = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
`
const SetNav = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:3;
`
const Holder = styled.div `
  display:flex;
  flex-direction:column;
  margin-top:30px;
  flex-grow:4;
`

export default function Home() {

  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
  const HandleClickButtonColor1 = () =>{
    setButtonState1(1);
  } 
  const HandleClickButtonColor2 = () =>{
    setButtonState1(2);
  } 
  const HandleClickButtonColor3 = () =>{
    setButtonState1(3);
  } 
  const HandleClickButtonColor4 = () =>{
    setButtonState1(4);
  } 
  const HandleClickButtonColor5 = () =>{
    setButtonState1(5);
  } 
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }
  
  return (
    <Cont>
      <GlbNav>
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
        </GlbNav>
    <SetNav>
      <h2>Settings</h2>
      <SettingNavCont
          heading="Add a member"
          ps="Invite a new member"
          src="/Member.png"
          onClick={() =>{
            HandleClickButtonColor1();
          }} 
          bgcolor={
            buttonstate1 === 1 ? '#888888' : '#FFFFFF'}
         
      />
      <SettingNavCont
        heading="House Rules"
        ps="Learn about house rules"
        src="/House.png"
       onClick={() =>{
        HandleClickButtonColor2();
      }} 
      bgcolor={buttonstate1 === 2 ? '#888888' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Manage Profile"
      ps="Manage profile settings"
      src="/Test Account.png"
       onClick={() =>{
        HandleClickButtonColor3();
      }} 
      bgcolor={
        buttonstate1 === 3 ? '#888888' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Leave group"
      ps="Leave and join a new group"
      src="/Export.png"
       onClick={() =>{
        HandleClickButtonColor4();
      }} 
      bgcolor={
        buttonstate1 === 4 ? '#888888' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Log Out"
      ps="Log out from the account"
      src="/Exit.png"
       onClick={() =>{
        HandleClickButtonColor5();
      }} 
      bgcolor={
        buttonstate1 === 5 ? '#888888' : '#FFFFFF'}
      /> 
    </SetNav> 
    <Holder>
      <Invite></Invite>
    </Holder> 
    </Cont>
  )
}
