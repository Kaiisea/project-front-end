import Chatting from "../img/Chatting.jpg";
import BlackStories from "../img/BlackStories.png";
import Gartic from "../img/Gartic.png";
import Guesser from "../img/Guesser.jpg";
import lol from "../img/lol.jpg";
import Nightmares from "../img/Nightmares.jpg";
import Porrito from "../img/Porrito.png";
import Quiplash from "../img/Quiplash.jpg";
import Senua from "../img/Senua.jpg";
import Valorant from "../img/Valorant.jpeg";
import classes from "./Schedule.module.css"

const Schedule = () => {
  return (
  <div className={classes.divCenter}>
    <h1>Week 2 of August</h1>
    <table>
        <tr>
            <th>Hora</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </tr>
        <tr>
            <th className={classes.thWidth}>&nbsp;18:30&nbsp;</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Organizing <br/> the week</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Just <br/> Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Just <br/> Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Just <br/> Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Just <br/> Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Just <br/> Chatting</th>
        </tr>
        <tr>
            <th>19:30</th>
            <th><img src={Guesser} className={classes.photosSchedule} />&nbsp;Geo&nbsp;Guesser&nbsp; <br/> Daily</th>
            <th><img src={Guesser} className={classes.photosSchedule} />&nbsp;Geo&nbsp;Guesser&nbsp; <br/> Daily</th>
            <th><img src={Guesser} className={classes.photosSchedule} />&nbsp;Geo&nbsp;Guesser&nbsp; <br/> Daily</th>
            <th><img src={Guesser} className={classes.photosSchedule} />&nbsp;Geo&nbsp;Guesser&nbsp; <br/> Daily</th>
            <th><img src={Guesser} className={classes.photosSchedule} />&nbsp;Geo&nbsp;Guesser&nbsp; <br/> Daily</th>
            <th><img src={Porrito} className={classes.photosSchedule} />Porrito <br/> de Clicke</th>
        </tr>
        <tr>
            <th>20:00</th>
            <th><img src={Senua} className={classes.photosSchedule} />Senua's <br/> Sacrifice</th>
            <th><img src={Valorant} className={classes.photosSchedule} />Valorant <h4 className={classes.invisible}>Valorant</h4></th>
            <th><img src={Nightmares} className={classes.photosSchedule} />Little<br/> Nightmares</th>
            <th><img src={lol} className={classes.photosSchedule} />League&nbsp;of <br/> Legends</th>
            <th><img src={Guesser} className={classes.photosSchedule} />Geo&nbsp;Guesser<br/>Competition</th>
            <th><img src={BlackStories} className={classes.photosSchedule} />Black <br/> Stories</th>
        </tr>
        <tr>
            <th>21:00</th>
            <th><img src={Senua} className={classes.photosSchedule} />Senua's <br/> Sacrifice</th>
            <th><img src={Valorant} className={classes.photosSchedule} />Valorant <h4 className={classes.invisible}>Valorant</h4></th>
            <th><img src={Nightmares} className={classes.photosSchedule} />Little <br/> Nightmares</th>
            <th><img src={lol} className={classes.photosSchedule} />League&nbsp;of <br/> Legends</th>
            <th><img src={Quiplash} className={classes.photosSchedule} />Quiplash <h4 className={classes.invisible}>Quiplash</h4></th>
            <th><img src={Gartic} className={classes.photosSchedule} />Gartic <br/> phone</th>
        </tr>
        <tr>
            <th>23:00</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
        </tr>
    </table>
  </div>);
};
export default Schedule;
