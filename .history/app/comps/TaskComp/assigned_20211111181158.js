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

margin-left: 350px;

`

const BottomCont = styled.div`
display: flex; 
`

const OrderCont = styled.div`
display:flex;
flex-direction: column;
margin-left: 35px;
margin-top: 20px;

`

const Order = styled.div`
font-size: 16px;
font-weight: 500;
color: #3E3D3D;
margin-bottom: 30px;
`

const UserCont = styled.div`
display:flex;
flex-direction: column;
margin-top: 20px;
margin-left: 50px;

`
const Wrap=styled.div`
display:flex;
align-items:center;
margin-bottom: 20px;

`
const Users = styled.div`
font-size: 16px;
color:#3E3D3D;
font-weight: 600;

`
const Img = styled.img`
width: 20px;
height: 20px;
margin-right: 20px;

`
const Assigned = ({
})=>{
  return<Cont>
 <TopCont>
   <Title className="opensans">Garbage</Title>
   <Week className="opensans">Tuesday <Time className="opensans">11:00 AM</Time></Week>
   <Point className="opensans">50 pts</Point>
 </TopCont>

 <BottomCont>
   <OrderCont>
   <Order className="opensans">Order 1 </Order>
   <Order className="opensans">Order 2 </Order>
   <Order className="opensans">Order 3 </Order>
   <Order className="opensans">Order 4 </Order>
   
   </OrderCont>

  <UserCont>
  <Wrap><Img src="Avatar.png"/><Users className="opensans">Maria</Users></Wrap>
  <Wrap><Img src="Avatar.png"/><Users className="opensans">Maria</Users></Wrap>
  <Wrap><Img src="Avatar.png"/><Users className="opensans">Maria</Users></Wrap>
  <Wrap><Img src="Avatar.png"/><Users className="opensans">Maria</Users></Wrap>
  
  </UserCont>
 </BottomCont>
</Cont>

}
export default Assigned