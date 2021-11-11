import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Button from '../../comps/Button'
import {useRouter} from 'next/router';


const MainCont = styled.div`
display: flex;
flex-direction: column;
margin-top:10px;
width:100%;
align-items:center;
position:relative;
`

const TitleDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

`
const Title = styled.p`
font-size:35px;
margin-left:18%;
font-weight:700;
margin:10px;
`
const Image = styled.img`
width: 41px;
height:41px;
margin:10px;
margin-top:15px;
`
const TopText = styled.div`
font-size:20px;
font-weight: 400;
text-align: center;
color: #737373;

`
const TopDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:425px;
padding-bottom: 40px;
`
const BodyDiv = styled.div`
display:flex;
flex-direction: column;
align-items:left;
margin:15px;
width:700px;
`
const Header = styled.p`
font-size: 20px;
font-weight:600;
`
const Text = styled.p`
font-size: 16px;
font-weight:600;
color: #737373;
`

const Line = styled.hr`
border-color: #CCCCCC;
border-width: 0.5px;
border-style: solid;
width: 100%;
`
const ButtonDiv = styled.div`
margin-left:65%;
margin-top:50px;
`

const HouseRules = ({

    
}) => {
    const router = useRouter();
    return <MainCont>
                <TopDiv>
                    <TitleDiv>
                        <Image src="/House.png"></Image>
                        <Title> House Rules</Title>
                    </TitleDiv>
                    <TopText className="opensans">House rules should be followed during the stay at this house.</TopText>
                </TopDiv>
                <Line/>
                <BodyDiv>
                    <Header className="opensans">1. Clean After using a common space</Header>
                    <Text className="opensans">Common spaces such as kitchen, living room, washrooms should always be kept clean. *Must be cleaned once a week my each roomates*</Text>
                </BodyDiv> 
                <Line/>
                <BodyDiv>
                    <Header className="opensans">2.  Notify when you bring your friends</Header>
                    <Text className="opensans">When brining guest to the house you should always let your roommates know in advance. Unexpected guests are NOT ALLOWED. </Text>
                </BodyDiv> 
                <Line/>
                <BodyDiv>
                    <Header className="opensans">3. Please be quiet after 10 PM</Header>
                    <Text className="opensans">After 10:00 PM please be respectful to your rommates and stay quiet. Any loud phone calls, musics and other noises are not allowed. </Text>
                </BodyDiv>
                <Line/> 
                <BodyDiv>
                    <Header className="opensans">4. Please be quiet after 10 PM</Header>
                    <Text className="opensans">After 10:00 PM please be respectful to your rommates and stay quiet. Any loud phone calls, musics and other  noises are not allowed. </Text>
                </BodyDiv>
                <ButtonDiv>
                    <Button
                          title="Edit"
                          width="122px"
                          height="49px"
                          borderRadius="4px"
                          margin="2px"
                          fontSize="19px"
                    
                    ></Button>
                </ButtonDiv>

  
        </MainCont>
}

export default HouseRules;