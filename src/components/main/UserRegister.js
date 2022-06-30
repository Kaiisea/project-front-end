import classes from "./Login.module.css";
import breaks from "../../Breakpoint.css";

export function UserRegister() {
  return (
    <div>
      <form className={classes.form}>
        <h1 className={classes.formH1}>Join us, little Porocornio!</h1>
        <h2 className={`${classes.formSpacingRegister} ${classes.formUserH2}`}>
          Introduce your Twitch email
        </h2>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={`${classes.field} ${classes.formSpacingRegister}`}
        />
        <h2 className={`${classes.formSpacingRegister} ${classes.formUserH2}`}>
          Introduce your password
        </h2>
        <input
          id="password"
          type="password"
          placeholder="Password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          className={`${classes.field}`}
        />
        <h5
          className={`${classes.formSpacingRegister} ${classes.formPasswordRequirements}`}
        >
          Use a minimun 8-letters password with upper case, lower case and at
          least one digit
        </h5>
        <div className={classes.buttonDivRegister}>
          <button type="submit" className={`${classes.button} ${classes.buttonRegister}`}>
            B a c k &nbsp;&nbsp;&nbsp;t o &nbsp;&nbsp;&nbsp;l o g i n
          </button>
        </div>
        <div className={classes.buttonDivRegister}>
          <button type="submit"  className={`${classes.button} ${classes.buttonRegister}`}>
            C o n t i n u e &nbsp;&nbsp;&nbsp;r e g i s t e r i n g
          </button>
        </div>
      </form>
    </div>
  );
  // Component.propTypes = {
  //     first_name: PropTypes.string.isRequired
  // }
}
