import Chatting from "../img/justChatting.jpg";
import Gartic from "../img/garticPhone.png";
import Guesser from "../img/geoGuesser.jpg";
import lol from "../img/lol.jpg";
import Nightmares from "../img/nightmares.jpg";
import Porrito from "../img/porrito.png";
import Quiplash from "../img/quiplash.jpg";
import Senua from "../img/senua.jpg";
import Valorant from "../img/valorant.jpg";
import Minecraft from "../img/minecraft.jpg";
// import Deceit from "../img/deceit.jpg";
// import fallGuys from "../img/fallGuys.png";
// import Pinturillo from "../img/pinturillo.jpg";
// import Unpacking from "../img/npacking.jpg";
import classes from "./Schedule.module.css"

const Schedule = () => {
  return (
  <div className={classes.divCenter}>
    <h1>Week 2 of July</h1>
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
            <th><img src={Porrito} className={classes.photosSchedule} />Porrito <br/> de Clicke</th>
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
            <th>22:00</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Minecraft} className={classes.photosSchedule} />Minecraft<h4 className={classes.invisible}>Minecraft</h4></th>
            <th><img src={Minecraft} className={classes.photosSchedule} />Minecraft<h4 className={classes.invisible}>Minecraft</h4></th>
        </tr><tr>
            <th>23:00</th>
            <th className={classes.invisible}></th>
            <th className={classes.invisible}></th>
            <th className={classes.invisible}></th>
            <th className={classes.invisible}></th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
            <th><img src={Chatting} className={classes.photosSchedule} />Farewell Just Chatting</th>
        </tr>
    </table>
  </div>);
};
export default Schedule;
