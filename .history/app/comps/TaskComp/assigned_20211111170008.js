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
margin: 30px;
`
const Title = styled.div`
font-size: 20px;
font-weight: 700;
color: #181135;
`

const Week = styled.div`

`

const Time = styled.span`

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
 </TopCont>
</Cont>

}
export default Assigned