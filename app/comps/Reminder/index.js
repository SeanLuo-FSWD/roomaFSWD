import react from 'react';

import styled from 'styled-components';
import RemindContent from '../RemindContent';
import Completed_RemindContent from '../RemindContent/completed';
//import Completed from '../Completed';
import WeeklyRewards from '../WeeklyRewards';



const Cont = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
height:100vh;

`
const CardCont = styled.div`
width:685px;
height:${props=>props.height};
background-color:white;
box-shadow: 0px 4.014px 47.8px 0px #0000001C;
border-radius:22px;
`
const TopCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:1.5;
`
const HeadingCont = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const BotCont = styled.div`
display:flex;
flex-grow:1;
`
const Heading = styled.h3`
font-size: 25px;
font-weight: 700;
color: #181135;
margin:0;
margin-top:20px;
margin-left:30px;
margin-bottom:20px;
`
const DefMessage = styled.p`
visibility:${props=>props.visibility};
text-align:center;
margin-top:10px;
`
const MoreCont = styled.div`
display:flex
width:685px;
height:45px;
text-align:center;
position:absolute;
top:${props=>props.top};
`
const CompleteCont = styled.div`
display:flex
height:45px;
margin-right:30px;
margin-top:20px;
`
const Completed = styled.div`
text-align:center;
color:#7751E8;
`
const More = styled.div`
width:685px;
text-align:center;
color:#7751E8;
`
const Divider = styled.hr`
border-top: 1px solid #E8E8E8;

`
const Icon = styled.img`
`

const Reminder = ({
  heading="Today",
  def_visibility="visible",
  reminder_display="block",
  reminder_completed_display="block",
  height="340px",
  top="435px",
  title_complete="complete ",
  title_more="more ",
  rewards_display="block",
  checked="checked",
  //complete_display="block",
  //more_display="flex",
  //complete_width="235px",
  //complete_height="47px",
  //complete_borderRadius="8px",
  //more_after_display="none",
  onMoreClick=()=>{},
  onCompleteClick=()=>{},
  /* After expanding completed button on the top */
  //onCompleteClick_After=()=>{},
})=>{
return<Cont>
  <TopCont>
  {/*Main task cont within CardCont */}
  <CardCont height={height}>
  <scrollable-component>
  <HeadingCont>
  <Heading className="ubuntu">{heading}</Heading>
  <CompleteCont onClick={onCompleteClick} >
    <Completed className="opensans">{title_complete}<Icon src="/down_arrow.png"/></Completed>
    </CompleteCont>
  </HeadingCont>
    <RemindContent
     bgcolor="rgba(240,199,137,30%)"
     display={reminder_display}
     task_name="On going Task Name"
     vlcolor="#F0C789"
     name="Name"
     date="5:00-7:00PM"
    />
    <Completed_RemindContent
    bgcolor="rgba(240,199,137,15%)"
    display={reminder_completed_display}
    task_name="Completed Task Name"
    vlcolor="rgba(241,178,82,25%)"
    name="Name"
    date="5:00-7:00PM"
    checked={checked}
    />
    <DefMessage className="opensans" visibility={def_visibility}>Nothing is scheduled for today.</DefMessage>
    <MoreCont onClick={onMoreClick} top={top}>
    <More className="opensans"><Divider/>{title_more}<Icon src="/down_arrow.png"/></More>
    </MoreCont>
    </scrollable-component>
  </CardCont>
  {/*completed cont */}
  {/* 
  <Completed 
  display={complete_display}
  onCompleteClick={onCompleteClick}
  width={complete_width}
  height={complete_height}
  borderRadius={complete_borderRadius}
  more_display={more_display}
  more_after_display={more_after_display}

  onClick={onCompleteClick_After}
  />
  */}
  </TopCont>
  {/*WeeklyRewards cont */}
  <BotCont>
  <WeeklyRewards display={rewards_display}/>
  </BotCont>
</Cont>
}
export default Reminder