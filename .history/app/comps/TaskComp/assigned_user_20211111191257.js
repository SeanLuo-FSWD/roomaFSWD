import react from 'react';
import styled from 'styled-components';
import Button from '../Button';

const BottomCont = styled.div`
display: flex; 
`

const OrderCont = styled.div`
display:flex;
flex-direction: column;
margin-left: 35px;
margin-top: 30px;
margin-bottom: 15px;

`

const Order = styled.div`
font-size: 16px;
font-weight: 500;
color: #3E3D3D;
margin-bottom: 34px;
`

const UserCont = styled.div`
display:flex;
flex-direction: column;
margin-top: 30px;
margin-left: 50px;
margin-bottom: 15px;

`
const Wrap=styled.div`
display:flex;
align-items:center;
margin-bottom: 30px;

`
const Users = styled.div`
font-size: 16px;
color:#3E3D3D;
font-weight: 600;

`
const Img = styled.img`
width: 25px;
height: 25px;
margin-right: 20px;

`
const Assigned_User = ({
  display="flex",
  order = "Order1",
  src="/Avatar.png"
})=>{
  return <BottomCont>
   <OrderCont>
   <Order className="opensans">{order}</Order>
   
   </OrderCont>

  <UserCont>
  <Wrap><Img src={src}/><Users className="opensans">Maria</Users></Wrap>
 
  
  </UserCont>
 </BottomCont>


}
export default Assigned_User