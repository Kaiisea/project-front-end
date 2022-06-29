import { Login } from "./Login";
import { Register } from "./Register"
import classes from "./LoginDashboard.module.css";

export function LoginDashboard(props) {
    // const isClicked = false
  return (
    <section>
      <div className={classes.container}>
        <div className={`${classes.borderContainer} ${classes.borderContainerLogin}`}>
            <div className={classes.formButtonDiv}>
            <button className={classes.formButton}>Login</button>
            <button className={classes.formButton}>Register</button>
            </div>
          <div className={`${classes.formContainer} ${classes.formContainerLogin}`}>
          {/* {isClicked ? <Register/> : <Login/>} */}
          <Login/>
          </div>
        </div>
      </div>
    </section>
  );
}
