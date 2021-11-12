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
min-height: 300px;
box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001C;
border-radius: 20px;
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