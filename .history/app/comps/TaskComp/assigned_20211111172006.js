import react from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Cont = styled.div`
display:flex;
flex-direction:column;
min-width: 700px;
min-height: 300px;
box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001C;
border-radius: 20px;
`

const TopCont = styled.div`
display:flex;
width: 100%;
margin: 25px 30px 0px 30px;
align-items:center;
justify-content: space-between;
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
margin-right: 10px;

`

const BottomCont = styled.div`
display: flex; 



`
const Assigned = ({
})=>{
  return<Cont>
 <TopCont>
   <Title className="opensans">Garbage</Title>
   <Week className="opensans">Tuesday <Time className="opensans">11:00 AM</Time></Week>
   <Point className="opensans">50 pts</Point>
 </TopCont>
</Cont>

}
export default Assigned