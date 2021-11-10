import react, {useState} from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';

const Cont = styled.div`
display: flex;
flex-direction: column;
width:360px;
height:290px;
border-radius:10px;
margin-top:15px;
background-color:white;
box-shadow: 0px 0px 65.01036834716797px 0px #AAAAAA4F;
font-family:"Open Sans", sans-serif;
justify-content:center;
align-items:center;
`


const CalendarComp =({

})=>{
  const [date, setDate] = useState(new Date());
return<Cont>
<Calendar 
onChange={setDate}
value={date}
selectRange={true}
/>
  {/*{date.length > 0 ? (
  <p>
    <span>Start:</span>{' '}
    {date[0].toDateString()}
    &nbsp;|&nbsp;
    <span>End:</span> {date[1].toDateString()}
  </p>
) : (
  <p>
    <span>Default selected date:</span>{' '}
    {date.toDateString()}
  </p>
)}*/}
</Cont>
}
export default CalendarComp;