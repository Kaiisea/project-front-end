import classes from "./News.module.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className={classes.newsFlex}>
      <h1 className={classes.mainTitle}>N &nbsp;E &nbsp;W &nbsp;S</h1>
      <div className={classes.newsComputerFlex}>
        <div className={classes.newsBorderOut}>
          <div className={classes.newsBorderIn}>
            <h2 className={classes.titleNews}>Fanart Contest</h2>
            <p className={classes.pNews}>
              Are you a porocornio with art running through your veins? Then
              participate in this wonderful Cilleke01's fanart contest and win
              amazing prizes!
            </p>
            <div className={classes.divFlex}>
              <h1 className={classes.invisible}>Are you interested? -&gt;</h1>
              <Link to="/news1">
                <button className={classes.newsButton}>
                  <div className={classes.borderButton}>Tell me more</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.newsBorderOut}>
          <div className={classes.newsBorderIn}>
            <h2 className={classes.titleNews}>Youtube channel coming soon</h2>
            <p className={classes.pNews}>
              In case you didn't have enough Cilleke01 with all the streamings
              he does, we are going to create a Youtube account where we will
              upload exclusive content.
            </p>
            <div className={classes.divFlex}>
              <h1 className={classes.invisible}>Are you interested? -&gt;</h1>
              <Link to="/news2">
                <button className={classes.newsButton}>
                  <div className={classes.borderButton}>Tell me more</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.newsBorderOut}>
          <div className={classes.newsBorderIn}>
            <h2 className={classes.titleNews}>
              Spotify collaborative playlist
            </h2>
            <p className={classes.pNews}>
              Do you want to listen to your favorite songs during the streaming?
              Then check the link that we have left you inside the news right
              now!
            </p>
            <div className={classes.divFlex}>
              <h1 className={classes.invisible}>
                Are you interested? <br /> -&gt;
              </h1>
              <Link to="/news3">
                <button className={classes.newsButton}>
                  <div className={classes.borderButton}>Tell me more</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.newsBorderOut}>
          <div className={classes.newsBorderIn}>
            <h2 className={classes.titleNews}>
              No streaming on July 1st and 2nd
            </h2>
            <p className={classes.pNews}>
              Bad news porocornios, next July 1st and 2nd do not expect me on
              Twitch because it will be impossible for me to open streaming due
              to technical complications. See you all next week.
            </p>
            <div className={classes.divFlex}>
              <h1 className={classes.invisible}>Are you interested? -&gt;</h1>
              <Link to="/news4">
                <button className={classes.newsButton}>
                  <div className={classes.borderButton}>Tell me more</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
