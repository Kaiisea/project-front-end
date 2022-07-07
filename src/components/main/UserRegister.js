import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, signIn } from "../../store/loginSlice";

export function UserRegister() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewUser(data)).then(() => {
        setData({
          email: "",
          password: "",
        });
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.formH1}>Join us, little Porocornio!</h1>
        <h2 className={`${classes.formSpacingRegister} ${classes.formUserH2}`}>
          Introduce your Twitch email
        </h2>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          required
          className={`${classes.field} ${classes.formSpacingRegister}`}
          onChange={handleChange}
        />
        <h2 className={`${classes.formSpacingRegister} ${classes.formUserH2}`}>
          Introduce your password
        </h2>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          className={`${classes.field}`}
          onChange={handleChange}
        />
        <h5
          className={`${classes.formSpacingRegister} ${classes.formPasswordRequirements}`}
        >
          Use a minimun 8-letters password with upper case, lower case and at
          least one digit
        </h5>
        <div className={classes.buttonDivRegister}>
        <Link to="/login"><button type="submit" className={`${classes.button} ${classes.buttonRegister}`} >
            B a c k &nbsp;&nbsp;&nbsp;t o &nbsp;&nbsp;&nbsp;l o g i n
          </button></Link>
        </div>
        <div className={classes.buttonDivRegister}>
        <Link to="/register-member"><button type="submit" className={`${classes.button} ${classes.buttonRegister}`}>
            C o n t i n u e &nbsp;&nbsp;&nbsp;r e g i s t e r i n g
          </button></Link>
        </div>
      </form>
    </div>
  );
}
