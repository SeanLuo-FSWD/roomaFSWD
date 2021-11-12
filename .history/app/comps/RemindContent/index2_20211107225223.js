import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
margin-left:30px;
margin-top:20px;
visibility:${props=>props.visibility};
`
const CardCont = styled.div`
display:flex;
flex-direction:row;
width:268px;
height:65px;
background-color:${props=>props.bgcolor};
border-radius:15px;
`
const LeftCont = styled.div`
display:flex;
flex-grow:1;
`
const MainCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:8;
`
const VerLine = styled.div`
border-left: 3px solid;
border-left-color:${props=>props.vlcolor};
border-radius:10px;
height: 32px;
margin-left:20px;
margin-top:18px;
`
const Heading = styled.h3`
font-size: 13px;
color: #181135;
margin:0;
margin-top:15px;

`
const Details = styled.p`
font-size:10px;
margin-top:5px;
`
const Span = styled.span`
font-weight:700;
`


const RemindContent = ({
  bgcolor="rgba(240,199,137,30%)",
  visibility="visible",
  task_name="Task Name",
  vlcolor="#F0C789",
  name="Name",
  date="5:00-7:00PM",
  })=>{
  return<Cont visibility={visibility}>
    <CardCont bgcolor={bgcolor}>
      <LeftCont>
      <VerLine vlcolor={vlcolor}/>
      </LeftCont>
      <MainCont>
      <Heading className="opensans">{task_name}</Heading>
      <Details className="opensans"><Span>{name} </Span>{date}</Details>
      </MainCont>
    </CardCont>
  </Cont>
  }
  export default RemindContent