import Head from "next/head";
import styled from "styled-components";
import * as React from "react";
import Button from "../../comps/Button";
import { useForm } from "react-hook-form";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  font-size: 47px;
  margin-top: 150px;
  font-weight: 700;
  color: #181135;
  text-align: center;
`;

const Para = styled.div`
  font-size: 24px;
  max-width: 343px;
  color: #777777;
  margin-top: 20px;
  text-align: center;
`;

const Btnarea = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 800px;
`;

const ColorCont = styled.div`
  width: 340px;
  height: 187px;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`;
const SmallCont1 = styled.div`
  width: 340px;
  height: 76px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
`;
const SmallCont2 = styled.div`
  width: 340px;
  height: 76px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

const ColorButton1 = styled.button`
  width: 75px;
  height: 75px;
  background-color: #ea9b9b;
  border: transparent;
  border-radius: 100px;
  border-color: #7450e9;
  border-width: 4px;
`;
const ColorButton2 = styled.button`
  width: 75px;
  height: 75px;
  background-color: #f0c789;
  border: transparent;
  border-radius: 100px;
`;
const ColorButton3 = styled.button`
  width: 75px;
  height: 75px;
  background-color: #add9b7;
  border: transparent;
  border-radius: 100px;
`;
const ColorButton4 = styled.button`
  width: 75px;
  height: 75px;
  background-color: #abcded;
  border: transparent;
  border-radius: 100px;
`;
const ColorButton5 = styled.button`
  width: 75px;
  height: 75px;
  background-color: #ffeca8;
  border: transparent;
  border-radius: 100px;
`;
const ColorButton6 = styled.button`
  width: 75px;
  height: 75px;
  background-color: #c0b6ff;
  border: transparent;
  border-radius: 100px;
`;

const PickColorForm = ({}) => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data);
    console.log({ ...register });
  };

  const click = (e) => {
    e.preventDefault();
    e.currentTarget.style.border;
    console.log("color");
  };
  return (
    <MainCont>
      <Wrap>
        <Heading className="ubuntu">Welcome to Rooma</Heading>
        <Para className="opensans">
          Pick a color to get started with your roommates!
        </Para>
        <form onSubmit={handleSubmit(submitForm)}>
          <ColorCont>
            <SmallCont1>
              <ColorButton1
                onClick={click}
                value="f0c789"
                {...register("color")}
              />
              <ColorButton2
                onClick={click}
                value="f0c789"
                {...register("color")}
              />
              <ColorButton3
                onClick={click}
                value="add9b7"
                {...register("color")}
              />
            </SmallCont1>
            <SmallCont2>
              <ColorButton4 value="abcded" {...register("color")} />
              <ColorButton5 value="ffeca8" {...register("color")} />
              <ColorButton6 value="c0b6ff" {...register("color")} />
            </SmallCont2>
          </ColorCont>
          <Btnarea>
            <Button
              title="Next"
              width="158px"
              height="70px"
              borderRadius="8px"
              margin="1px"
              fontSize="28px"
              type="submit"
            />
          </Btnarea>
        </form>
      </Wrap>
    </MainCont>
  );
};

export default PickColorForm;
