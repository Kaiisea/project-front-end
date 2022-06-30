import { Login } from "./Login";
import { Register } from "./MemberRegister"
import classes from "./LoginDashboard.module.css";
import logo from "../img/logo.jpeg"

export function LoginDashboard(props) {
    // const isClicked = false
  return (
    <section>
      <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.titleDashboard}>C I L L E K E 0 1</h1>
        </div>
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
        <div className={classes.imgContainer}>
        <img src={logo} className={classes.logoDashboard}/>
        </div>
      </div>
    </section>
  );
}
