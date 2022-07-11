import classes from "./News.module.css";
import { Link } from "react-router-dom";

const News4 = () => {
  return (
    <div>
      <div className={classes.divNews}>
        <Link to="/news">
          <button className={`${classes.newsButton} ${classes.buttonLeft}`}>
            <div className={classes.borderButton}>Back</div>
          </button>
        </Link>
        <h1 className={classes.titleNewsInside}>
          N O &nbsp;S T R E A M I N G &nbsp;O N &nbsp;J U L Y &nbsp;1 S T
          &nbsp;A N D &nbsp;2 N D
        </h1>
        <p className={classes.pNewsInside}>
          Bad news porocornios, next July 1st and 2nd do not expect me on Twitch
          because it will be impossible for me to open streaming due to
          technical complications. I had to leave my computer in the IT store
          to be fixed due to a failure with the cooling system. I will take
          advantage of these days to work on the organization of new events for
          the channel that you will soon see in the corresponding section on the
          website. See you next week with more strength than ever, do not forget
          to check the schedule section to know what is coming in the channel.
          Lots of kisses from all of you!
        </p>
      </div>
    </div>
  );
};
export default News4;
