import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display: flex;
width: 41.47px;
height: 50.9px;
border-radius: 4.70px;
background-color: #F8F8F8;
align-items: center;
justify-content: center;

`
const Image = styled.img`
width: 12.25px;
height: 12.25px;

`
const AddButton= ({
 
    
    })=>{
      return<Cont>
                <Image src="/PurplePlus.svg"></Image>
             </Cont>
    }
    export default AddButton