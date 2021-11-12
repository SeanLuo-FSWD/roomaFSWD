import react, {useState} from 'react';
import styled from 'styled-components';
import RemindContent from '../RemindContent/index2';
import AddEvent from '../AddEvent';

const Cont = styled.div`
display:flex;
margin-top:20px;

`
const CardCont = styled.div`
width:360px;
height:600px;
background-color:white;
box-shadow: 0px 4.353448867797852px 51.15302276611328px 0px #0000001C;
border-radius:22px;
`
const TopCont = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const BotCont = styled.div`
display:flex;
flex-direction:column;
`
const Icon = styled.img`
width:19px;
height:19px;
margin-top:20px;
margin-right:20px;

`
const Heading = styled.h3`
font-size: 19px;
font-weight: 700;
color: #181135;
margin:0;
margin-top:30px;
margin-left:35px;

`
const Span = styled.span`
font-size: 19px;
font-weight:300;
color: #181135;
margin:0;
`
const DefMessage = styled.p`
visibility:${props=>props.visibility};
text-align:center;
margin-top:10px;
`


const Event = ({
  day="Oct8",
  week="Thrusday",
  bgcolor="rgba(240,199,137,30%)",
  visibility="visible",
  task_name="Event Name",
  vlcolor="#F0C789",
  name="Name",
  date="5:00-7:00PM",
   src="/plus.svg",
  visibility2="hidden",
  onClick=()=>{},

})=>{
  
return<Cont>
  <CardCont>
  <TopCont>
  <Heading className="ubuntu">{day} , <Span>{week}</Span></Heading>
  <Icon src={src} onClick={onClick}/>
  </TopCont>
    <BotCont>
    <RemindContent
     bgcolor={bgcolor}
     visibility={visibility}
     task_name={task_name}
     vlcolor={vlcolor}
     name={name}
     date={date}
    />
    <AddEvent
     visibility2={visibility2}
    />
    </BotCont>
  </CardCont>
</Cont>
}
export default Event