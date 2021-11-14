import react from 'react';
import styled from 'styled-components';
import Button from '../Button';

const MainCont = styled.div`
display:${props=>props.display};
flex-direction: column;
justify-content:center;
align-items:center;


`

const Cont = styled.div`
display:flex;
flex-direction:column;

min-width: 700px;
min-height: 650px;
box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001C;
border-radius: 20px;
`
const InputCont = styled.div`
display:flex;
margin: 20px;
justify-content: space-evenly;

`
const Input1 = styled.input`
padding: 20px 10px 10px 20px;
border: #C8C8C8 1px solid;
width: 200px;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: ${props=>props.marginbottom};
margin-top: 10px;
border:none;
background-color:#F6F6F6;
`
const Input2 = styled.input`
padding: 20px 10px 10px 20px;
border: #C8C8C8 1px solid;
width:400px;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: ${props=>props.marginbottom};
margin-top: 10px;
border:none;
background-color:#F6F6F6;

`
const Day = styled.div`
display:flex;
flex-direction: column;
margin: 20px 20px 10px 20px;

`
const Head = styled.div`
font-size: 25px;
font-weight: 700;
margin: 0px 0px 10px 25px;
color: #181135;
`
const ButtonCont =styled.div`
display:flex;
width: 85%;
margin: 10px 0px 10px 15px;
justify-content: space-evenly;

`
const DayButton = styled.button`
width: 65px;
height:50px;
font-size: 16px;
color: #181135;
font-weight: 600;
background: white;
border-radius: 13px;
border: 1px solid #DBDBDB;
`

const PtsButton = styled.button`
width: 65px;
height:50px;
font-size: 16px;
color: #181135;
font-weight: 700;
background: white;
border-radius: 13px;
border: 1px solid #DBDBDB;
`
const Span = styled.div`
font-size: 10px;
font-weight: 400;
color: #181135;
`
const MemWrap =styled.div`
display:flex;
width: 85%;
margin: 10px 0px 10px 15px;


`
const MemCont = styled.div`
display: flex;
flex-direction: column;
margin: 0px 30px 0px 15px;

`
const Avatar = styled.img`
width: 60px;
height: 60px;
`

const Name = styled.div`
font-weight: 600;
color: #3E3D3D;
margin-top: 10px;
`
const ButCont=styled.div`
display:flex;
width: 100%;
justify-content: flex-end;
`

const Assigned = ({
display="flex"
})=>{
  return<MainCont display={display}>

<Cont>
 
</Cont>
  </MainCont>
}
export default Assigned