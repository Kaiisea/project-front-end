import classes from "./Login.module.css";
import breaks from "../../Breakpoint.css";

export function Login() {
  return (
    <div>
      <form className={classes.form}>
        <h1 className={classes.formH1}>Welcome to Porocornio's Army</h1>
        <label htmlFor="username" className={classes.label}>
          Username
        </label>
        <input
          id="username"
          type="username"
          placeholder="Enter your username"
          className={`${classes.field} ${classes.formSpacing}`}
        />
        <label htmlFor="password" className={classes.label}>
          {" "}
          Password{" "}
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className={`${classes.field} ${classes.formSpacing}`}
        />
        <div className={classes.formSpacing}>
          <input className={classes.inputRemember} id="remember" type="checkbox" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit" className={classes.button}>
          Login
        </button>
      </form>
    </div>
  );
}
