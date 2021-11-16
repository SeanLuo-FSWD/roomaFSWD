import react from "react";
import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";

const MainCont = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 700px;
  min-height: 650px;
  box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001c;
  border-radius: 20px;
`;
const InputCont = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-evenly;
`;
const Input1 = styled.input`
  padding: 20px 10px 10px 20px;
  border: #c8c8c8 1px solid;
  width: 200px;
  font-size: 19px;
  font-weight: 400;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: 10px;
  border: none;
  background-color: #f6f6f6;
`;
const Input2 = styled.input`
  padding: 20px 10px 10px 20px;
  border: #c8c8c8 1px solid;
  width: 400px;
  font-size: 19px;
  font-weight: 400;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: 10px;
  border: none;
  background-color: #f6f6f6;
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 10px 20px;
`;
const Head = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin: 0px 0px 10px 25px;
  color: #181135;
`;
const ButtonCont = styled.div`
  display: flex;
  width: 85%;
  margin: 10px 0px 10px 15px;
  justify-content: space-evenly;
`;
const DayButton = styled.button`
  width: 65px;
  height: 50px;
  font-size: 16px;
  color: #181135;
  font-weight: 600;
  background: white;
  border-radius: 13px;
  border: 1px solid #dbdbdb;
`;

const PtsButton = styled.button`
  width: 65px;
  height: 50px;
  font-size: 16px;
  color: #181135;
  font-weight: 700;
  background: white;
  border-radius: 13px;
  border: 1px solid #dbdbdb;
`;
const Span = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: #181135;
`;
const MemWrap = styled.div`
  display: flex;
  width: 85%;
  margin: 10px 0px 10px 15px;
`;
const MemCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px 0px 15px;
`;
const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;

const Name = styled.div`
  font-weight: 600;
  color: #3e3d3d;
  margin-top: 10px;
`;
const ButCont = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const TaskComp = ({ 
  display = "flex", 
  onClick = () => {} 

}) => {

  //Day Button
  const weekends = [
    { id: "Mon", clicked: false },
    { id: "Tue", clicked: false },
    { id: "Wed", clicked: false },
    { id: "Thur", clicked: false },
    { id: "Fri", clicked: false },
    { id: "Sat", clicked: false },
    { id: "Sun", clicked: false },
  ];
  const [buttons, setButtons] = useState(weekends);

  function handleButtonClick(buttonId) {
    const nextState = buttons.map((button) => {
      if (button.id !== buttonId) {
        return button;
      }
      return { ...button, clicked: !button.clicked };
    });
    setButtons(nextState);
  }

  //Points Button
  const points = [
    { id: "10", clicked: false },
    { id: "20", clicked: false },
    { id: "30", clicked: false },
    { id: "40", clicked: false },
    { id: "50", clicked: false },
    { id: "60", clicked: false },
    { id: "70", clicked: false },
  ];
  const [pointButtons, setPointButtons] = useState(points);

  function handlePointsClick(pointsId) {
    const pointState = pointButtons.map((points) => {
      if (points.id !== pointsId) {
        return points;
      }
      return { ...points, clicked: !points.clicked };
    });
    setPointButtons(pointState);
  }

  return (
    <MainCont display={display}>
      <Cont>
        <InputCont>
          <Input1 type="text" placeholder="Add New Task" />{" "}
          <Input2 type="text" placeholder="Time" />
        </InputCont>

        <Day>
          <Head className="opensans">Day</Head>
          <ButtonCont>
            {buttons.map((button) => (
              <DayButton
                className="opensans"
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
                className={button.clicked ? "test" : null}
              >
                {button.id}
              </DayButton>
            ))}
          </ButtonCont>
        </Day>

        <Day>
          <Head className="opensans">Points</Head>
          <ButtonCont>
          {pointButtons.map((points) => (
            <PtsButton className="opensans"
            key={points.id}
            onClick={() => handlePointsClick(points.id)}
            className={points.clicked ? "test" : null}
            
            >
              10 <Span>Points</Span>
            </PtsButton>
              ))}
            <PtsButton className="opensans">
              20 <Span>Points</Span>
            </PtsButton>
            <PtsButton className="opensans">
              30 <Span>Points</Span>
            </PtsButton>
            <PtsButton className="opensans">
              40 <Span>Points</Span>
            </PtsButton>
            <PtsButton className="opensans">
              50 <Span>Points</Span>
            </PtsButton>
            <PtsButton className="opensans">
              60 <Span>Points</Span>
            </PtsButton>
            <PtsButton className="opensans">
              70 <Span>Points</Span>
            </PtsButton>
          </ButtonCont>
        </Day>

        <Day>
          <Head className="opensans">Members</Head>
          <MemWrap>
            <MemCont>
              <Avatar src="/Avatar2.png" />
              <Name className="opensans">Victoria</Name>
            </MemCont>
            <MemCont>
              <Avatar src="/Avatar3.png" />
              <Name className="opensans">Victoria</Name>
            </MemCont>
            <MemCont>
              <Avatar src="/Avatar2.png" />
              <Name className="opensans">Victoria</Name>
            </MemCont>
          </MemWrap>
        </Day>

        <ButCont>
          <Button
            title="Add"
            width="122px"
            margin="0px 40px 40px 0px"
            onClick={onClick}
          />
        </ButCont>
      </Cont>
    </MainCont>
  );
};
export default TaskComp;
