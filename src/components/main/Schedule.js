import classes from "./Schedule.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedule } from "../../store/loginSlice";
import Row from "./Row";

const Schedule = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [dateToShow, setDateToShow] = useState({
    counter: 1,
    day: "",
    dayOfMonth: "",
    month: "",
    maxDayOfMonth: "",
    maxMonth: "",
  });
  const dispatch = useDispatch();
  const schedule = useSelector((state) => state.login.login.data.info.data);
  // console.log(schedule);
  useEffect(() => {
    dispatch(getSchedule())
      .then((result) => {
        let date = new Date();
        setDateToShow({
          day: date.getDay(),
          dayOfMonth: date.getDate(),
          maxDayOfMonth: date.getDate() + 7,
          month: date.getMonth() + 1,
          maxMonth: date.getMonth() + 1,
        });
        // console.log(result.payload.data);
        let filteredEvents = result.payload.data.filter(
          (savedEvent) =>
            savedEvent.day >= dateToShow.dayOfMonth &&
            savedEvent.day <= dateToShow.maxDayOfMonth &&
            savedEvent.month >= dateToShow.month &&
            savedEvent.month <= dateToShow.maxMonth
        );
        let orderedEventsByHour = filteredEvents.sort(
          (a, b) => a.hour - b.hour
        );
        let orderedEventsByday = orderedEventsByHour.sort(
          (a, b) => a.day - b.day
        );
        let orderedEventsByMonth = orderedEventsByday.sort(
          (a, b) => a.month - b.month
        );
        let organicedEvents = [];
        orderedEventsByMonth.forEach((element) => {
          organicedEvents[element.day] = [...organicedEvents, element];
        });

        console.log(organicedEvents);
        setAllEvents(orderedEventsByMonth);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // console.log(allEvents);
    // console.log(dateToShow);
  }, [allEvents]);
  return (
    <div className={classes.divCenter}>
      <h1>Week 2 of July</h1>
      {/* <img
        src="http://localhost:8000/lol.jpg"
        alt="lol"
        className={classes.photosSchedule}
      /> */}
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>18:30</th>
            <th>19:30</th>
            <th>20:00</th>
            <th>21:00</th>
            <th>22:00</th>
            <th>23:00</th>
          </tr>
        </thead>
        <tbody>
          {allEvents.map((savedEvent, index) => {
            // console.log("working");
            return <Row fullEvent={savedEvent} dateInfo={dateToShow} />;
          })}

          {/* {data.map((item) => (
          <tr>
            <td className={classes.thWidth}>&nbsp;18:30&nbsp;</td>
            <td key={item.id}>
              <img src={Chatting} className={classes.photosSchedule} />
              {item.status.data.event}
            </td>
            <td>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </td>
            <td>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </td>
            <td>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </td>
            <td>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </td>
            <td>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </td>
          </tr>
          <tr>
            <td>19:30</td>
            <td>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </td>
            <td>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </td>
            <td>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </td>
            <td>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </td>
            <td>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </td>
            <td>
              <img src={Porrito} className={classes.photosSchedule} />
              Porrito <br /> de Clicke
            </td>
          </tr>
          <tr>
            <td>20:00</td>
            <td>
              <img src={Senua} className={classes.photosSchedule} />
              Senua's <br /> Sacrifice
            </td>
            <td>
              <img src={Valorant} className={classes.photosSchedule} />
              Valorant <h4 className={classes.invisible}>Valorant</h4>
            </td>
            <td>
              <img src={Nightmares} className={classes.photosSchedule} />
              Little
              <br /> Nightmares
            </td>
            <td>
              <img src={lol} className={classes.photosSchedule} />
              League&nbsp;of <br /> Legends
            </td>
            <td>
              <img src={Guesser} className={classes.photosSchedule} />
              Geo&nbsp;Guesser
              <br />
              Competition
            </td>
            <td>
              <img src={Porrito} className={classes.photosSchedule} />
              Porrito <br /> de Clicke
            </td>
          </tr>
          <tr>
            <td>21:00</td>
            <td>
              <img src={Senua} className={classes.photosSchedule} />
              Senua's <br /> Sacrifice
            </td>
            <td>
              <img src={Valorant} className={classes.photosSchedule} />
              Valorant <h4 className={classes.invisible}>Valorant</h4>
            </td>
            <td>
              <img src={Nightmares} className={classes.photosSchedule} />
              Little <br /> Nightmares
            </td>
            <td>
              <img src={lol} className={classes.photosSchedule} />
              League&nbsp;of <br /> Legends
            </td>
            <td>
              <img src={Quiplash} className={classes.photosSchedule} />
              Quiplash <h4 className={classes.invisible}>Quiplash</h4>
            </td>
            <td>
              <img src={Gartic} className={classes.photosSchedule} />
              Gartic <br /> phone
            </td>
          </tr>
          <tr>
            <th>22:00</th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Farewell Just Chatting
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Farewell Just Chatting
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Farewell Just Chatting
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Farewell Just Chatting
            </th>
            <th>
              <img src={Minecraft} className={classes.photosSchedule} />
              Minecraft<h4 className={classes.invisible}>Minecraft</h4>
            </th>
            <th>
              <img src={Minecraft} className={classes.photosSchedule} />
              Minecraft<h4 className={classes.invisible}>Minecraft</h4>
            </th>
          </tr>
          <tr>
            <th>23:00</th>
            <th className={classes.invisible}></th>
            <th className={classes.invisible}></th>
            <th className={classes.invisible}></th>
            <th className={classes.invisible}></th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Farewell Just Chatting
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Farewell Just Chatting
            </th>
          </tr>
        ))} */}
        </tbody>
      </table>
    </div>
  );
};
export default Schedule;
