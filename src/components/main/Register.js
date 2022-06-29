import classes from "./Login.module.css";
import breaks from "../../Breakpoint.css";

export function Register() {
  return (
    <div>
      <form className={classes.form}>
        <h1 className={classes.formH1}>Join us, little Porocornio!</h1>
        <div className={classes.divDoubleInput}>
        <input
          id="first_name"
          type="first_name"
          placeholder="Name"
          className={`${classes.field} ${classes.formSpacingRegister} ${classes.doubleInputOne}`}
        />
        <input
          id="last_name"
          type="last_name"
          placeholder="Last name"
          className={`${classes.field} ${classes.formSpacingRegister} ${classes.doubleInputTwo}`}
        />
        </div>
        <div className={classes.divDoubleInput}>
          <input
            id="username"
            type="username"
            placeholder="User name"
            className={`${classes.field} ${classes.formSpacingRegister} ${classes.doubleInputThree}`}
          />
        <select id="pronouns" name="pronouns" className={classes.selectForm}>
          <option value="he" className={classes.initialOptionForm}>Choose your pronouns</option>
          <option value="she" className={classes.optionForm}>
            She/her
          </option>
          <option value="he" className={classes.optionForm}>He/him</option>
          <option value="they" className={classes.optionForm}>They/them</option>
          <option value="sheTHey" className={classes.optionForm}>She/they</option>
          <option value="heThey" className={classes.optionForm}>He/they</option>
          <option value="ze" className={classes.optionForm}> Ze/zem</option>
          <option value="it" className={classes.optionForm}>It/its</option>
          <option value="xe" className={classes.optionForm}>Xe/xem</option>
          <option value="nonConforming" className={classes.optionForm}>Pronouns Non-conforming</option>
        </select>
        </div>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={`${classes.field} ${classes.formSpacingRegister}`}
        />
        <input
          id="phone"
          type="phone"
          placeholder="Telephone number"
          className={`${classes.field} ${classes.formSpacingRegister}`}
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={`${classes.field} ${classes.formSpacingRegister}`}
        />
        <button type="submit" className={classes.button}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
  // Component.propTypes = {
  //     first_name: PropTypes.string.isRequired
  // }
}
