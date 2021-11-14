import react from 'react';
import styled from 'styled-components';
import Button from '../Button';
const Cont = styled.div`
display:flex;
margin-top:-50px;
visibility:${props=>props.visibility2};
flex-direction:column;
`
const InputBox = styled.div`
display:flex;
flex-direction:column;

`
const Input = styled.input`
background-color:#F4F4F4;
border:none;
border-radius:10px;
margin-left:30px;
width:275px;
height:45px;
text-indent:15px;
margin-bottom:30px;
`
const DescriptionInput = styled.input`
background-color:#F4F4F4;
border:none;
border-radius:10px;
margin-left:30px;
width:275px;
height:105px;
text-indent:15px;
margin-bottom:30px;
`

const AddEvent = ({
  visibility2="visible"
})=>{
  
return<Cont visibility2={visibility2}>
<InputBox>
<Input type="text" name="text" placeholder="Event Title" />
<Input type="text" name="text" placeholder="Start Event" />
<Input type="text" name="text" placeholder="End Event" />
<DescriptionInput type="text" name="text" placeholder="Description"/>
</InputBox>
<Button
title="Add"
width="120px"
height="50px"
margin="10px"
borderRadius="10px"
border="none"
bgcolor="#714FE9"
fontcolor="white"
fontSize="20px"
fontWeight="700"
/>
</Cont>
}
export default AddEvent