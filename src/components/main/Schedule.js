import classes from "./Schedule.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedule } from "../../store/loginSlice";

const Schedule = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [dateToShow, setDateToShow] = useState({
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
        let filteredEvents = schedule.filter(
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
        // let groupedEvents = orderedEventsByMonth.forEach(element => {
          
        // });((savedEvent)=>{

        // })
        setAllEvents(orderedEventsByMonth);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(allEvents);
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
          {/* {data.map((item) => (
          <tr>
            <th className={classes.thWidth}>&nbsp;18:30&nbsp;</th>
            <th key={item.id}>
              <img src={Chatting} className={classes.photosSchedule} />
              {item.status.data.event}
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </th>
            <th>
              <img src={Chatting} className={classes.photosSchedule} />
              Just <br /> Chatting
            </th>
          </tr>
          <tr>
            <th>19:30</th>
            <th>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </th>
            <th>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </th>
            <th>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </th>
            <th>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </th>
            <th>
              <img src={Guesser} className={classes.photosSchedule} />
              &nbsp;Geo&nbsp;Guesser&nbsp; <br /> Daily
            </th>
            <th>
              <img src={Porrito} className={classes.photosSchedule} />
              Porrito <br /> de Clicke
            </th>
          </tr>
          <tr>
            <th>20:00</th>
            <th>
              <img src={Senua} className={classes.photosSchedule} />
              Senua's <br /> Sacrifice
            </th>
            <th>
              <img src={Valorant} className={classes.photosSchedule} />
              Valorant <h4 className={classes.invisible}>Valorant</h4>
            </th>
            <th>
              <img src={Nightmares} className={classes.photosSchedule} />
              Little
              <br /> Nightmares
            </th>
            <th>
              <img src={lol} className={classes.photosSchedule} />
              League&nbsp;of <br /> Legends
            </th>
            <th>
              <img src={Guesser} className={classes.photosSchedule} />
              Geo&nbsp;Guesser
              <br />
              Competition
            </th>
            <th>
              <img src={Porrito} className={classes.photosSchedule} />
              Porrito <br /> de Clicke
            </th>
          </tr>
          <tr>
            <th>21:00</th>
            <th>
              <img src={Senua} className={classes.photosSchedule} />
              Senua's <br /> Sacrifice
            </th>
            <th>
              <img src={Valorant} className={classes.photosSchedule} />
              Valorant <h4 className={classes.invisible}>Valorant</h4>
            </th>
            <th>
              <img src={Nightmares} className={classes.photosSchedule} />
              Little <br /> Nightmares
            </th>
            <th>
              <img src={lol} className={classes.photosSchedule} />
              League&nbsp;of <br /> Legends
            </th>
            <th>
              <img src={Quiplash} className={classes.photosSchedule} />
              Quiplash <h4 className={classes.invisible}>Quiplash</h4>
            </th>
            <th>
              <img src={Gartic} className={classes.photosSchedule} />
              Gartic <br /> phone
            </th>
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
