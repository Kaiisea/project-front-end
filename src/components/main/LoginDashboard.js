import React from "react";
import { Login } from "./Login";
import { Register } from "./MemberRegister";
import classes from "./LoginDashboard.module.css";
import logo from "../img/logo.jpeg";
import home from "../img/homeIcon.png";
import { Link } from "react-router-dom";

export function LoginDashboard() {
  return (
    <section>
      <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.titleDashboard}>C I L L E K E 0 1</h1>
        </div>
        <div className={`${classes.borderContainer} ${classes.borderContainerLogin}`}>
            <div className={classes.formButtonDiv}>
            <button className={`${classes.formButton} ${classes.formButtonHome}`}><img src={home} className={classes.homeDashboard} /></button>
            <Link to="/register"><button className={classes.formButton}>Register</button></Link>
          </div>
          <div className={`${classes.formContainer} ${classes.formContainerLogin}`}>
            <Login />
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img src={logo} className={classes.logoDashboard} />
        </div>
      </div>
    </section>
  );
}
