import { Login } from "./Login";
import { MemberRegister } from "./MemberRegister";
import { UserRegister } from "./UserRegister";
import classes from "./LoginDashboard.module.css";
import logo from "../img/logo.jpeg";
import { Link } from "react-router-dom";



function RegisterDashboard(props) {
  return (
    <section>
      <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.titleDashboardRegister}>C I L L E K E 0 1</h1>
        </div>
        <div className={`${classes.borderContainer} ${classes.borderContainerRegister}`}>
          <div className={`${classes.formContainer} ${classes.formContainerRegister}`}>
          <UserRegister/>
          </div>
        </div>
        <div className={classes.imgContainerRegister}>
        <img src={logo} className={classes.logoDashboardRegister}/>
        </div>
      </div>
    </section>
  );
}
export default RegisterDashboard;