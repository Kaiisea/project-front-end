import classes from "./News.module.css"

const News = () => {
  return (
    <div className={classes.newsFlex}>
      <h1>News</h1>
      <div className={classes.newsComputerFlex}>
      <div className={classes.newsBorderOut}><div className={classes.newsBorderIn}>
      <h2>New 1</h2>
      <p>Lore ipsum</p>
      </div></div>
      <div className={classes.newsBorderOut}><div className={classes.newsBorderIn}>
      <h2>New 2</h2>
      <p>Lore ipsum</p>
      </div></div>
      <div className={classes.newsBorderOut}><div className={classes.newsBorderIn}>
      <h2>New 3</h2>
      <p>Lore ipsum</p>
      </div></div>
      <div className={classes.newsBorderOut}><div className={classes.newsBorderIn}>
      <h2>New 4</h2>
      <p>Lore ipsum</p>
      </div></div>
    
    </div></div>
  );
};
export default News;
