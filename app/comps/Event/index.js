import react, { useState, useEffect } from "react";
import styled from "styled-components";
import RemindContent from "../RemindContent/index2";
import AddEvent from "../AddEvent";
import { getEvents } from "../../api/event.api";
import CustomUtil from "../../helpers/CustomUtil";

const Cont = styled.div`
  display: flex;
  margin-top: 20px;
`;
const CardCont = styled.div`
  width: 360px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 4.353448867797852px 51.15302276611328px 0px #0000001c;
  border-radius: 22px;
`;
const TopCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BotCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  width: 19px;
  height: 19px;
  margin-top: 30px;
  margin-right: 35px;
`;
const Heading = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: #181135;
  margin: 0;
  margin-top: 30px;
  margin-left: 35px;
`;
const Span = styled.span`
  font-size: 19px;
  font-weight: 300;
  color: #181135;
  margin: 0;
`;
const DefMessage = styled.p`
  visibility: ${(props) => props.visibility};
  text-align: center;
  margin-top: 10px;
`;

const Event = ({
  day = "Oct8",
  week = "Thrusday",
  bgcolor = "rgba(240,199,137,30%)",
  visibility = "visible",
  task_name = "Event Name",
  vlcolor = "#F0C789",
  name = "Name",
  date = "5:00-7:00PM",
  src = "/plus.svg",
  visibility2 = "hidden",
  onClick = () => {},
  onSubmitClick,
  retDate = CustomUtil.formatTimelessDate(
    new Date().toDateString()
  ).toISOString(),
  displayForm,
}) => {
  const handleEventSubmitClick = () => {
    onSubmitClick();
  };

  const [Events, setEvents] = useState(null);

  useEffect(() => {
    getEvents("", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        setEvents(result.data.events);
      }
    });
  }, [retDate]);

  const displayEvents = () => {
    if (Events) {
      const listCompo = Events.map((event) => (
        <RemindContent
          bgcolor={bgcolor}
          visibility={visibility}
          task_name={event.title}
          vlcolor={vlcolor}
          name={event.description}
          date=""
        />
      ));

      return listCompo;
    } else {
      return;
    }
  };

  return (
    <Cont>
      <CardCont>
        <TopCont>
          <Heading className="ubuntu">
            {day} , <Span>{week}</Span>
          </Heading>
          <Icon src={src} onClick={onClick} />
        </TopCont>
        <BotCont>
          {displayForm ? (
            <AddEvent
              visibility2={visibility2}
              onEventSubmitClick={handleEventSubmitClick}
            />
          ) : (
            displayEvents()
          )}
          {/* {Events && displayEvents()}
          <RemindContent
            bgcolor={bgcolor}
            visibility={visibility}
            task_name={task_name}
            vlcolor={vlcolor}
            name={name}
            date={date}
          /> */}
          {/* <AddEvent
            visibility2={visibility2}
            onEventSubmitClick={handleEventSubmitClick}
          /> */}
        </BotCont>
      </CardCont>
    </Cont>
  );
};
export default Event;
