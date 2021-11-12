import react from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Assigned_User from './assigned_user';

const MainCont = styled.div`
display:${props=>props.display};
flex-direction: column;
justify-content:center;
align-items:center;


`
const Cont = styled.div`
display:${props=>props.display};
flex-direction:column;
max-width: 700px;
min-height: 300px;
box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001C;
border-radius: 20px;
`

const TopCont = styled.div`
display:flex;
width: 100%;
margin: 25px 30px 0px 30px;
align-items:center;
`
const Title = styled.div`
font-size: 20px;
font-weight: 700;
color: #181135;
margin-right: 30px;
`

const Week = styled.div`
font-size: 15px;
color: #3E3D3D;
font-weight: 700;

`

const Time = styled.span`
font-weight: 400;
color: #3E3D3D;
`
const Point = styled.div`
display:flex;
justify-content: center;
align-items:center;
border-radius: 28.8985px;
flex-grow:0;
padding: 20px;
height:40px;
background: linear-gradient(90deg, #9351E8 0%, #6853E9 51.56%, #504EDB 100%);
font-size: 16px;
color:white;
font-weight: 700;

margin-left: 300px;

`

const BottomCont = styled.div`
display: flex; 
flex-direction: column;
`



const Assigned = ({
  display="flex"
})=>{
  return <MainCont display={display}>
  <Cont>
 <TopCont>
   <Title className="opensans">Garbage</Title>
   <Week className="opensans">Tuesday <Time className="opensans">11:00 AM</Time></Week>
   <Point className="opensans">50 pts</Point>
 </TopCont>

 <BottomCont>
   <Assigned_User/>
   <Assigned_User src="Avatar2.png" name="Leah"/>
   <Assigned_User/>
   <Assigned_User/>
   
 </BottomCont>
</Cont>
</MainCont>

}
export default Assigned