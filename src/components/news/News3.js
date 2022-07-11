import classes from "./News.module.css";
import { Link } from "react-router-dom";

const News3 = () => {
  return (
    <div>
      <div className={classes.divNews}>
        <Link to="/news">
          <button className={`${classes.newsButton} ${classes.buttonLeft}`}>
            <div className={classes.borderButton}>Back</div>
          </button>
        </Link>
        <h1 className={classes.titleNewsInside}>
          S P O T I F Y &nbsp;C O L L A B O R A T I V E &nbsp;P L A Y L I S T
        </h1>
        <p className={classes.pNewsInside}>
          Bored of the repetitive playlist that Cilleke01 always plays during
          the streamings? Do you want to listen to your favorite songs during
          the streaming? Then participate right now in the{" "}
          <a href="https://open.spotify.com/playlist/4maDphihzAR0VTVQXcmN8g?si=833d150beb9c4c59&pt=1f04aae1522e80fd53579401ed8b12">
            collaborative playlist
          </a>&nbsp;
          that we have just created for our porocorns to include their best
          songs.
          <br /><br />
          <strong> Rules of the collaborative playlist:</strong>
          <br /><br /> -No more than 10 songs per person -Cannot include excessive
          foul language.
          <br /> -It is strictly forbidden to include lyrics that include
          sexist, transphobic, racist, lgtbiphobic, ableist, etc. messages.
          <br /> -It is allowed to include a maximum of 2 of your own songs if
          you have them uploaded to Spotify.
        </p>
      </div>
    </div>
  );
};
export default News3;
