import classes from "./News.module.css";
import { Link } from "react-router-dom";

const News2 = () => {
  return (
    <div>
      <div className={classes.divNews}>
        <Link to="/news">
          <button className={`${classes.newsButton} ${classes.buttonLeft}`}>
            <div className={classes.borderButton}>Back</div>
          </button>
        </Link>
        <h1 className={classes.titleNewsInside}>
          Y O U T U B E &nbsp;C H A N N E L &nbsp;C O M I N G &nbsp;S O O N
        </h1>
        <p className={classes.pNewsInside}>
          Porocornios, just for having registered on the official website of our
          king Cilleke01, you are going to find out before anyone else that we
          are going to create a <a href="https://www.youtube.com/user/cilleke01">Youtube account</a>. Didn't you have enough Cilleke
          with the one you have in the live shows? Well, we are going to bring
          you unique videos on this channel, to which you will have access
          before the rest of the followers of the channel. Videos of vegan
          recipes, travel vlogs and much more coming soon. Do you want to see
          them already?
        </p>
      </div>
    </div>
  );
};
export default News2;
