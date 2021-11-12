import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Button from '../Button';


const  CardCont = styled.div`
display: ${props=>props.display};
width:720px;
height:280px;
background-color:white;
box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.2);
border-radius:22px;
align-items: center;
justify-content: center;
`

const TitleDiv = styled.div`
display:flex;

width:720px;
justify-content: flex-start;

`

const Title = styled.div`
font-size: 24px;
font-weight: 600;
margin-top: 30px;
margin-left: 85px;
`


const TabCont = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
position: relative;
left: 70px;
margin-top:10px;
width: 650px;
`

const BotDiv = styled.div`
display:flex;
position: relative;
width: 600px;
right: -45px;
margin-top: 5px;

justify-content: flex-end;


`


const AddFilter = ({

    display="none",

    btn_bgcolor1="#ffffff",
    btn_bgcolor2="#ffffff",
    btn_bgcolor3="#ffffff",
    btn_bgcolor4="#ffffff",
    btn_bgcolor5="#ffffff",
    btn_bgcolor6="#ffffff",
    btn_bgcolor7="#ffffff",
    btn_bgcolor8="#ffffff",
    fontcolor1="#7751E8",
    fontcolor2="#7751E8",
    fontcolor3="#7751E8",
    fontcolor4="#7751E8",
    fontcolor5="#7751E8",
    fontcolor6="#7751E8",
    fontcolor7="#7751E8",
    fontcolor8="#7751E8",
     onAddClick=()=>{},
     onToggleClick=()=>{},
     onPostClick=()=>{},
   
     onBtnClick1=()=>{},
     onBtnClick2=()=>{},
     onBtnClick3=()=>{},
     onBtnClick4=()=>{},
     onBtnClick5=()=>{},
     onBtnClick6=()=>{},
     onBtnClick7=()=>{},
     onBtnClick8=()=>{},

}) => {
    return <CardCont display={display}>
                <TitleDiv>
                    <Title className="opensans">Filter Options</Title>
                </TitleDiv>
                <TabCont>
                    <Button
                    title="Roommates"
                    width="114.16px"
                    height="32.35px"
                    margin="15px"
                    borderRadius="18px"
                    border="solid 1.8px"
                    bgcolor={btn_bgcolor1}
                    fontcolor={fontcolor1}
                    fontSize="14.37"
                    fontWeight="500"
                    onClick={onBtnClick1}
                    />
                    <Button
                    title="Event"
                    width="114.16px"
                    height="32.35px"
                    margin="15px"
                    borderRadius="18px"
                    border="solid 1.8px"
                    bgcolor={btn_bgcolor2}
                    fontcolor={fontcolor2}
                    fontSize="14.37"
                    fontWeight="500"
                    onClick={onBtnClick2}
                    />
                    <Button
                    title="School"
                    width="114.16px"
                    height="32.35px"
                    margin="15px"
                    borderRadius="18px"
                    border="solid 1.8px"
                    bgcolor={btn_bgcolor3}
                    fontcolor={fontcolor3}
                    fontSize="14.37"
                    fontWeight="500"
                    onClick={onBtnClick3}
                    />
                    <Button
                    title="Work"
                    width="114.16px"
                    height="32.35px"
                    margin="15px"
                    borderRadius="18px"
                    border="solid 1.8px"
                    bgcolor={btn_bgcolor4}
                    fontcolor={fontcolor4}
                    fontSize="14.37"
                    fontWeight="500"
                    onClick={onBtnClick4}
                    />
                    <Button
                    title="Information"
                    width="114.16px"
                    height="32.35px"
                    margin="15px"
                    borderRadius="18px"
                    border="solid 1.8px"
                    bgcolor={btn_bgcolor5}
                    fontcolor={fontcolor5}
                    fontSize="14.37"
                    fontWeight="500"
                    onClick={onBtnClick5}
                    />
                    <Button
                    title="Commute"
                    width="114.16px"
                    height="32.35px"
                    margin="15px"
                    borderRadius="18px"
                    border="solid 1.8px"
                    bgcolor={btn_bgcolor6}
                    fontcolor={fontcolor6}
                    fontSize="14.37"
                    fontWeight="500"
                    onClick={onBtnClick6}
                    />
                    <Button
                    title="Restaurants"
                    width="114.16px"
                    height="32.35px"
                    margin="15px"
                    borderRadius="18px"
                    border="solid 1.8px"
                    bgcolor={btn_bgcolor7}
                    fontcolor={fontcolor7}
                    fontSize="14.37"
                    fontWeight="500"
                    onClick={onBtnClick7}
                    />
                    <Button
                    title="Other"
                    width="114.16px"
                    height="32.35px"
                    margin="15px"
                    borderRadius="18px"
                    border="solid 1.8px"
                    bgcolor={btn_bgcolor8}
                    fontcolor={fontcolor8}
                    fontSize="14.37"
                    fontWeight="500"
                    onClick={onBtnClick8}
                    />
                </TabCont>
                <BotDiv>
                    <Button
                    title="Confirm"
                    width="128.71px"
                    height="36.93px"
        
                    borderRadius="8px"
                    bgcolor= "#7751E8"
                    fontSize="17.24px"
                    fontWeight="700">
                        
                    </Button>
                </BotDiv>


    </CardCont>
                

        
}

export default AddFilter;