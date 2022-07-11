import classes from "./News.module.css";
import { Link } from "react-router-dom";

const News1 = () => {
  return (
    <div>
      <div className={classes.divNews}>
        <Link to="/news">
          <button className={`${classes.newsButton} ${classes.buttonLeft}`}>
            <div className={classes.borderButton}>Back</div>
          </button>
        </Link>
        <h1 className={classes.titleNewsInside}>
          F A N A R T &nbsp;C O N T E S T
        </h1>
        <p className={classes.pNewsInside}>
          We are looking for new designs and logos to completely renew the
          aesthetics of the channel, but without losing a bit of the essence
          that characterizes us, the Porocornios' Army. As we know that you are
          the ones who know us best, we want you to be the ones in charge of
          this incredible mission. Obviously, those artists whose designs are
          selected will receive a financial prize in return. But if your
          drawings are not selected, don't worry, we will give great prizes just
          for participating. What are you waiting for to leave your mark on the
          channel of the porocorn king Cilleke01? <br />
          <br />
          <strong>Contest rules: </strong>
          <br />
          <br />
          -They must be original designs by the artist <br />
          -They must be related to the lore of the Cilleke01 channel <br />
          -No more than 3 drawings can be sent per artist. <br />
          -In case of not being selected as a winner, the more drawings you
          send, the more options you will have to win a prize but only a maximum
          of 1 prize per artist will be given.
          -Send your designs to cilleke01@gmail.com
        </p>
      </div>
    </div>
  );
};
export default News1;
