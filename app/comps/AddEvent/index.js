import react, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";
import { createEvent } from "../../api/event.api";
import Picker from "./Picker";

const Cont = styled.div`
  display: flex;
  margin-top: 50px;
  visibility: ${(props) => props.visibility2};
  flex-direction: column;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  background-color: #f4f4f4;
  border: none;
  border-radius: 10px;
  margin-left: 30px;
  width: 300px;
  height: 50px;
  text-indent: 15px;
  margin-bottom: 30px;
`;
const DescriptionInput = styled.input`
  background-color: #f4f4f4;
  border: none;
  border-radius: 10px;
  margin-left: 30px;
  width: 300px;
  height: 130px;
  text-indent: 15px;
  margin-bottom: 30px;
`;

const AddEvent = ({ visibility2 = "visible", onEventSubmitClick }) => {
  const [EventData, setEventData] = useState({
    title: "",
    description: "",
  });

  const [PickerDate, setPickerDate] = useState({
    start: {
      year: "2021",
      month: "11",
      day: "1",
    },
    end: {
      year: "2021",
      month: "11",
      day: "1",
    },
  });

  useEffect(() => {
    console.log("88888888888888888888");
    console.log(PickerDate);
  });

  const onDateChange = (e, start) => {
    const name = e.target.name;
    const value = e.target.value;
    let set_obj;
    if (start) {
      set_obj = {
        ...PickerDate,
        start: { ...PickerDate.start, [name]: value },
      };
      if (name === "month") {
        set_obj = {
          ...PickerDate,
          start: { ...PickerDate.start, [name]: value, day: "1" },
        };
      }

      setPickerDate(set_obj);
    } else {
      set_obj = {
        ...PickerDate,
        end: { ...PickerDate.end, [name]: value },
      };
      if (name === "month") {
        set_obj = {
          ...PickerDate,
          end: { ...PickerDate.end, [name]: value, day: "1" },
        };
      }

      setPickerDate(set_obj);
    }
  };

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEventData({ ...EventData, [name]: value });
  };

  const onAddEvent = () => {
    console.log("444444444444444444");
    const startDate = new Date(
      `${PickerDate.start.year}-${PickerDate.start.month}-${PickerDate.start.day}`
    );
    const endDate = new Date(
      `${PickerDate.end.year}-${PickerDate.end.month}-${PickerDate.end.day}`
    );

    const startDateISO = startDate.toISOString();
    const endDateISO = endDate.toISOString();

    const event_obj = {
      title: EventData.title,
      description: EventData.description,
      startAt: startDateISO,
      endAt: endDateISO,
    };

    if (startDate.getTime() > endDate.getTime()) {
      window.alert("End date cannot be earlier than start date");
    } else {
      createEvent(event_obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");

          onEventSubmitClick();
        }
      });
    }

    onEventSubmitClick();
  };

  return (
    <Cont visibility2={visibility2}>
      <InputBox>
        <Input
          type="text"
          name="title"
          placeholder="Event Title"
          onChange={onFormChange}
        />
        <Picker
          onDateChange={(e) => onDateChange(e, true)}
          PickerDate={PickerDate}
          title="Start"
          type="start"
        ></Picker>
        <Picker
          onDateChange={(e) => onDateChange(e, false)}
          PickerDate={PickerDate}
          title="End"
          type="end"
        ></Picker>
        {/* <Input
          type="text"
          name="startAt"
          placeholder="Start Event"
          onChange={onFormChange}
        />
        <Input
          type="text"
          name="endAt"
          placeholder="End Event"
          onChange={onFormChange}
        /> */}
        <DescriptionInput
          type="text"
          name="description"
          placeholder="Description"
          onChange={onFormChange}
        />
      </InputBox>
      <Button
        title="Add"
        width="120px"
        height="50px"
        margin="10px"
        borderRadius="10px"
        border="none"
        bgcolor="#714FE9"
        fontcolor="white"
        fontSize="20px"
        fontWeight="700"
        onClick={onAddEvent}
      />
    </Cont>
  );
};
export default AddEvent;
