import { Login } from "./Login";
import { Register } from "./Register"
import classes from "./LoginDashboard.module.css";

export function RegisterDashboard(props) {
  return (
    <section>
      <div className={classes.container}>
        <div className={`${classes.borderContainer} ${classes.borderContainerRegister}`}>
          <div className={`${classes.formContainer} ${classes.formContainerRegister}`}>
          <Register/>
          </div>
        </div>
      </div>
    </section>
  );
}
