import react from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
display: flex;
flex-direction: column;
margin-top:10px;
width:100%;

`

const Cont = styled.div`
display: flex;
flex-direction: column;
margin:40px;
margin-right: 130px;
`
const Head = styled.div`
font-size: 25px;
font-weight: 600;
color: #1E1E1E;
margin-bottom: 12px;
`
const Text = styled.div`
font-size: 20px;
color: #666666;
font-weight: 400;
`
const Copy = styled.button`
display: flex;
max-width: 205px;
height: 70px;
justify-content: center;
align-items: center;
background-color: #F6F6FE;
border: none;
padding: 20px;
border-radius: 6px;
margin-top: 25px;
position: relative;
// left: ${props=>props.position};
left:500px;
`
const Img = styled.img`
margin-right: 10px;
`
const ButtonTxt = styled.div`
font-size: 23px;
color: #7751E8;
font-weight: 600;
`

const Line = styled.hr`
border-color: #CCCCCC;
border-width: 0.5px;
border-style: solid;
width: 100%;
`

const Invite = ({
// head="Invite a member with a link ",
// text="Invite a member to join your team from another device. ",
// position="500px",


}) => {
    return <MainCont>
    <Cont>
        <Head className="opensans">Invite a member with a link</Head>
        <Text className="opensans">Invite a member to join your team from another device.</Text>
        <Copy>
        <Img src="/link.svg"></Img>
        <ButtonTxt className="opensans">Copy Link</ButtonTxt>
        </Copy>
    </Cont>
    <Line/>
    <Cont>
        <Head className="opensans">Invite a member with a code</Head>
        <Text className="opensans">Invite a member to join your team by sending a code.</Text>
        <Copy>
        <Img src="/Code.svg"></Img>
        <ButtonTxt className="opensans">Copy Code</ButtonTxt>
        </Copy>
    </Cont>

</MainCont>
    
}

export default Invite;