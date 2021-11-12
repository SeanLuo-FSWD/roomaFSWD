import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import NavBar2 from '../comps/NavBar2';
import AddPost from '../comps/AddPost'
import {useState} from 'react';
import CommunityPost from '../comps/CommunityPost';

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
const MainCont = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  flex-grow:3;
`
const PostArea = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:50px;
`
const RightCont = styled.div`
  display:flex;
  margin-left:200px;
  flex-direction:column;
  flex-grow:3;
`
export default function Community() {
  
  const [checked, setChecked] = useState(0);
  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
  const [buttonstate2, setButtonState2] = useState(0);

  const [buttonstate6, setButtonState6] = useState(0);
  const [buttonstate7, setButtonState7] = useState(0);
  const [buttonstate8, setButtonState8] = useState(0);
  const [buttonstate9, setButtonState9] = useState(0);
  const [buttonstate10, setButtonState10] = useState(0);
  const [buttonstate11, setButtonState11] = useState(0);
  const [buttonstate12, setButtonState12] = useState(0);
  const [buttonstate13, setButtonState13] = useState(0);

  const HandleToggleClick = () =>{
    if (checked === 0){
    setChecked(1);
  }else{
    setChecked(0);
  }
  }
  const HandleAddClick = () =>{
    if (buttonstate1=== 0){
    setButtonState1(1);
  }else{
    setButtonState1(0);
  }
  }
  // posting new post by clicking post button
  const HandleAddPost = () =>{
    if (buttonstate2=== 0){
    setButtonState2(1);
  }else{
    setButtonState2(0);
  }
  }
  //
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }
  // Btn options handling from here
  const Btn1= () =>{
    if (buttonstate6===0){
    setButtonState6(1);
  }else{
    setButtonState6(0);
  }
  }
  const Btn2= () =>{
    if (buttonstate7===0){
    setButtonState7(1);
  }else{
    setButtonState7(0);
  }
  }
  const Btn3= () =>{
    if (buttonstate8==0){
    setButtonState8(1);
  }else{
    setButtonState8(0);
  }
  }
  const Btn4= () =>{
    if (buttonstate9===0){
    setButtonState9(1);
  }else{
    setButtonState9(0);
  }
  }
  const Btn5= () =>{
    if (buttonstate10===0){
    setButtonState10(1);
  }else{
    setButtonState10(0);
  }
  }
  const Btn6= () =>{
    if (buttonstate11===0){
    setButtonState11(1);
  }else{
    setButtonState11(0);
  }
  }
  const Btn7= () =>{
    if (buttonstate12===0){
    setButtonState12(1);
  }else{
    setButtonState12(0);
  }
  }
  const Btn8= () =>{
    if (buttonstate13===0){
    setButtonState13(1);
  }else{
    setButtonState13(0);
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
        <MainCont>
        <AddPost
        src="/Avatar.png"
        onAddClick={()=>{
          HandleAddClick();
        }}
        height={buttonstate1 === 1 ? '385px':'65px' }
        display={buttonstate1 === 1 ? 'block':'none'}
        onToggleClick={() =>{
          HandleToggleClick();
        }}
        visibility={checked === 1 ? 'visible' : 'hidden'}
        onPostClick={()=>{
          HandleAddPost();
        }}
      
        // button color changes from here
        onBtnClick1={()=>{
          Btn1();
        }}
        btn_bgcolor1={buttonstate6 === 1?'#7751E8':'#ffffff'}
        fontcolor1={buttonstate6 === 1? '#ffffff':'#7751E8'}
        onBtnClick2={()=>{
          Btn2();
        }}
        btn_bgcolor2={buttonstate7 === 1?'#7751E8':'#ffffff'}
        fontcolor2={buttonstate7 === 1? '#ffffff':'#7751E8'}
        onBtnClick3={()=>{
          Btn3();
        }}
        btn_bgcolor3={buttonstate8 === 1?'#7751E8':'#ffffff'}
        fontcolor3={buttonstate8 === 1? '#ffffff':'#7751E8'}
        onBtnClick4={()=>{
          Btn4();
        }}
        btn_bgcolor4={buttonstate9 === 1?'#7751E8':'#ffffff'}
        fontcolor4={buttonstate9 === 1? '#ffffff':'#7751E8'}
        onBtnClick5={()=>{
          Btn5();
        }}
        btn_bgcolor5={buttonstate10 === 1?'#7751E8':'#ffffff'}
        fontcolor5={buttonstate10 === 1? '#ffffff':'#7751E8'}
        onBtnClick6={()=>{
          Btn6();
        }}
        btn_bgcolor6={buttonstate11 === 1?'#7751E8':'#ffffff'}
        fontcolor6={buttonstate11 === 1? '#ffffff':'#7751E8'}
        onBtnClick7={()=>{
          Btn7();
        }}
        btn_bgcolor7={buttonstate12 === 1?'#7751E8':'#ffffff'}
        fontcolor7={buttonstate12 === 1? '#ffffff':'#7751E8'}
        onBtnClick8={()=>{
          Btn8();
        }}
        btn_bgcolor8={buttonstate13 === 1?'#7751E8':'#ffffff'}
        fontcolor8={buttonstate13 === 1? '#ffffff':'#7751E8'}

        // button color changes end
        />
        <PostArea>
        <CommunityPost
        title="Any recommendations on resturaunts in Vancouver?"
        name="Floyd Miles"
        src="/Avatar3.png"
        button_title="restaurants"
        time="6h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="100"
        CommentNum="10"
        />
        <CommunityPost
        title="Furniture Sale"
        name="Hannah M"
        src="/Avatar3.png"
        button_title="Event"
        time="6h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="230"
        CommentNum="20"
        />
        <CommunityPost
        title="Need Roommates!"
        name="Jo K"
        src="/Avatar3.png"
        button_title="roommates"
        time="2h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="1100"
        CommentNum="15"
        />
        <CommunityPost
        title="Music Festival on Queen Park this week!"
        name="Rachel K"
        src="/Avatar3.png"
        button_title="Event"
        time="12h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="800"
        CommentNum="30"
        />
        </PostArea>
        </MainCont>
        <RightCont>

        </RightCont>
    </Cont>
  )
}