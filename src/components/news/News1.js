import classes from "./News.module.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <div className={classes.divNews}>
        <Link to="/news">
          <button className={`${classes.newsButton} ${classes.buttonLeft}`}>
            <div className={classes.borderButton}>Back</div>
          </button>
        </Link>
        <h1 className={classes.titleNewsInside}>N E W &nbsp;&nbsp;1</h1>
        <p className={classes.pNews}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};
export default News;
