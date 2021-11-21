import { useState, useContext } from "react";
import * as React from "react";
import Head from "next/head";
import styled from "styled-components";
import NavBar3 from "../comps/NavBar3";
import ChatNav from "../comps/ChatNav";
import User1 from "../comps/ChatComps/user1";
import User2 from "../comps/ChatComps/user2";
import Input from "../comps/ChatComps/input";
import { getRoomates } from "../api/room.api";
import { globalContext } from "../store/globalContext";
import { requireAuthen } from "../api/require.authen";

const MainCont = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

//left cont
const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:2;
border-right: 1px #D6D6D6 solid;
di
`;
const TopCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 75px 0px 75px;
  align-items: center;
`;
const Heading = styled.div`
  font-size: 34px;
  font-weight: 700;
`;
const Icon = styled.img``;

//Chat Nav cont
const NavCont = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

// Right Container

const RightCont = styled.div`
  display: flex;
  flex: 3;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;
const ChatCont1 = styled.div`
  display: flex;
  width: 100%;
`;
const ChatCont2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export default function Chat(props) {
  const {
    currentUser,
    setCurrentUser,
    currentError,
    setCurrentError,
    setCurrentMsg,
    currentMsg,
  } = useContext(globalContext);
  const [buttonstate5, setButtonState5] = useState(0);

  const GlobalNavClick = () => {
    if (buttonstate5 === 0) {
      setButtonState5(1);
    } else {
      setButtonState5(0);
    }
  };
  const [buttonstate6, setButtonState6] = useState(0);
  const NotificationClick = () => {
    if (buttonstate6 === 0) {
      setButtonState6(1);
      setButtonState7(0);
    } else {
      setButtonState6(0);
      setButtonState7(1);
    }
  };

  const [buttonstate7, setButtonState7] = useState(0);
  const BackClick = () => {
    if (buttonstate7 === 0) {
      setButtonState7(1);
      setButtonState6(0);
    } else {
      setButtonState7(0);
      setButtonState6(1);
    }
  };
  const [buttonstate1, setButtonState1] = useState(0);
  const HandleClickButtonColor1 = () => {
    setButtonState1(1);
  };
  const HandleClickButtonColor2 = () => {
    setButtonState1(2);
  };
  const HandleClickButtonColor3 = () => {
    setButtonState1(3);
  };
  const HandleClickButtonColor4 = () => {
    setButtonState1(4);
  };
  const HandleClickButtonColor5 = () => {
    setButtonState1(5);
  };

  const getChats = () => {
    console.log("props.users props.users props.users");
    // console.log(props);
    // console.log(props.chatters);
    // console.log(props.auth);
    const chat_list = props.chatters.map((chatter) => {
      if (chatter.id !== props.auth.user.id) {
        return <ChatNav chatterInfo={chatter} user={props.auth.user} />;
      }
    });
    return chat_list;
  };

  return (
    <MainCont>
      <NavBar3 />
      <LeftCont>
        <TopCont>
          <Heading className="ubuntu">Chat</Heading>
          <Icon src="/chat.svg" />
        </TopCont>

        <NavCont>
          {getChats()}
          {/* <ChatNav
            onClick={() => {
              HandleClickButtonColor1();
            }}
            bgcolor={buttonstate1 === 1 ? "#FAFAFA" : "#FFFFFF"}
          />

          <ChatNav
            info="Darleen, Deavon"
            onClick={() => {
              HandleClickButtonColor2();
            }}
            bgcolor={buttonstate1 === 2 ? "#FAFAFA" : "#FFFFFF"}
          />

          <ChatNav
            info="Floyd Miles"
            display="none"
            marginleft="40px"
            onClick={() => {
              HandleClickButtonColor3();
            }}
            bgcolor={buttonstate1 === 3 ? "#FAFAFA" : "#FFFFFF"}
          />
          <ChatNav
            info="Devon Lane"
            display="none"
            marginleft="40px"
            onClick={() => {
              HandleClickButtonColor4();
            }}
            bgcolor={buttonstate1 === 4 ? "#FAFAFA" : "#FFFFFF"}
          /> */}
        </NavCont>
      </LeftCont>

      {/* Right Container */}
      <RightCont>
        <ChatCont1>
          <User1></User1>
        </ChatCont1>

        <ChatCont2>
          <User2></User2>
        </ChatCont2>

        <Input></Input>
      </RightCont>
    </MainCont>
  );
}

export const getServerSideProps = async (ctx) => {
  // return requireAuthen(context);
  // return getRoomates(ctx);

  let authProp = await requireAuthen(ctx, true);

  console.log("55555555555555555");
  console.log(authProp);
  let chatters = await getRoomates(ctx);

  if (!authProp.hasOwnProperty("user")) {
    return { redirect: authProp };
  } else {
    return {
      props: {
        auth: authProp,
        chatters: chatters.props.users,
      },
    };
  }
};
