import classes from "./Login.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, signIn } from "../../store/loginSlice";

export function Login() {
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
      dispatch(signIn(data)).then(() => {
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
      <form className={classes.form}>
        <h1 className={classes.formH1}>Welcome to Porocornio's Army</h1>
        <label htmlFor="username" className={classes.label}>
          Username
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={handleChange}
          required
          className={`${classes.field} ${classes.formSpacing}`}
        />
        <label htmlFor="password" className={classes.label}>
          {" "}
          Password{" "}
        </label>
        <input
          id="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          required
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
