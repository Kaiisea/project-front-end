import classes from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={classes.centerSpinner}>
      <div className={classes.ldsHourglass}></div>
    </div>
  );
}

export default Spinner;