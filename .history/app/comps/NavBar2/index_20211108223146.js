import Image from 'next/image'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Button from '../Button'
import PointCont from '../PointCont';

const CtrlCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:${props=>props.width};
height:100vh;
box-shadow: 0px 4.0133771896362305px 11.036787033081055px 0px #00000014;
`

const ProfileCont = styled.div`
width:75%;
display:flex;
position:relative;
flex-direction: column;
align-items:center;
margin-left:13px;
top:-70px;
`

const IconCont = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
width: 100%;
height: 100%;
`
const TopCont = styled.div`
display:${props=>props.display};
`
const TopCont2 = styled.div`
display:${props=>props.display};
`
const TabCont = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-left:35px;
margin-right:30px;
`

const SetIconCont = styled.div`
display:flex;
position: relative;
top: 85px;
display:flex;
flex-direction:row;
justify-content:${props=>props.justifyContent};
align-items:center;
margin-left:35px;
margin-right:30px;
`
/*oepn nav:
justify-content:space-even;

close nav:
justify-content:center;
*/

const MainIcons = styled.div`
display: flex;
flex-direction: column;
height: 40%;
justify-content:space-between;
align-items:${props=>props.alignItems};
position: relative;
bottom: 30px;
`
/*
open nav bar:
align-items:" "
close nav bar:
align-items:center; 

*/
//items in the div's

const Icon = styled.img`
width: 20px;
height: 20px;
`

const Title = styled.p`
font-size:21px;
font-weight:400;
margin-left:30px;
display:${props=>props.display};
`

const Pic = styled.img`
width:115px;
height:115px;
`


const Name = styled.p`
font-size:25px;
font-weight:700;
margin-top:15px;
margin-bottom:15px;
`
const BellIcon = styled.img`
width:20px;
height:25px;
position:relative;
left:225px;
top:-100px;
`
const RoomaLogo = styled.img`
width:50px;
height:50px;
position:relative;
bottom: 130px;
margin-left:48px;
align-items:center;
`
const NavBar2 = ({
    src="/Avatar.png",
    name="Esther Howard",
    user_point="100 pts",
    // making nav width change
    onContClick=()=>{},
    width="288px",
    display="flex",
    displayLogo="none",
    displayHome="block",
    displayTask="block",
    displayChat="block",
    displayMember="block",
    displayCommunity="block",
    displaySetting="block",
    alignItems="unset",
    justifyContent="space-even"
}) => {
    const router = useRouter();
    return <CtrlCont onClick={onContClick} width={width}>
           <IconCont>
               {/*Wide global nav top cont from here*/}
              <TopCont display={display}>
                  <BellIcon src="/Bell_Icon.svg"/>
                        <ProfileCont>
                            <Pic src={src}></Pic>
                            <Name className="opensans">{name}</Name>
                            <PointCont
                            width="90px"
                            height="40px"
                            user_point={user_point}
                            />
                        </ProfileCont>
                </TopCont>
                {/*after closing show Rooma icon here*/}
                <TopCont2 display={displayLogo}>
                <RoomaLogo src="/Logo.png"/>
                </TopCont2>

                    <MainIcons alignItems={alignItems}>
                        <TabCont 
                         onClick={()=>{
                            router.push("/")
                        }}
                        >
                            <Icon src="/Home_Icon.svg"/>
                            <Title className="opensans" display={displayHome}>Home</Title>
                        </TabCont>
                        <TabCont
                         onClick={()=>{
                            router.push("/add_task")
                        }}
                        >
                            <Icon src="/Task_Icon.svg"/>
                            <Title className="opensans" display={displayTask}>Tasks</Title>
                        </TabCont>
                        <TabCont
                           onClick={()=>{
                            router.push("/")
                        }}
                        >
                            <Icon src="/Chat_Icon.svg"/>
                            <Title className="opensans" display={displayChat}>Chat</Title>
                        </TabCont>          
                        <TabCont
                           onClick={()=>{
                            router.push("/members")
                        }}
                        >
                            <Icon src="/Members_Icon.svg"/>
                            <Title className="opensans" display={displayMember}>Memebers</Title>
                        </TabCont>
                        <TabCont
                           onClick={()=>{
                            router.push("/community")
                        }}
                        >
                            <Icon src="/search.svg"/>
                            <Title className="opensans" display={displayCommunity}>Community</Title>
                        </TabCont>
                    </MainIcons>
                 
                        <SetIconCont
                        justifyContent={justifyContent}
                           onClick={()=>{
                            router.push("/setting")
                        }}
                        >
                                <Icon src="/Settings_Icon.svg"/>
                                <Title className="opensans" display={displaySetting}>Settings</Title>
                        </SetIconCont>
                
                </IconCont>
                
            </CtrlCont>   
}
export default NavBar2;