import classes from "./News.module.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className={classes.newsFlex}>
      <h1 className={classes.mainTitle}>N &nbsp;E &nbsp;W &nbsp;S</h1>
      <div className={classes.newsComputerFlex}>
        <div className={classes.newsBorderOut}>
          <div className={classes.newsBorderIn}>
            <h2 className={classes.titleNews}>New 1</h2>
            <p className={classes.pNews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <h2 className={classes.titleNews}>New 2</h2>
            <p className={classes.pNews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <h2 className={classes.titleNews}>New 3</h2>
            <p className={classes.pNews}>
              LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={classes.divFlex}>
              <h1 className={classes.invisible}>Are you interested? -&gt;</h1>
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
            <h2 className={classes.titleNews}>New 4</h2>
            <p className={classes.pNews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
