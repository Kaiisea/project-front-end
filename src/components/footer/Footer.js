import classes from "./Footer.module.css";
import logo from "../img/logoArcoiris.png";

export function Footer() {
  return (
    <footer className={classes.footer}>
      Made with the <img src={logo} className={classes.logoFooter} /> Power
    </footer>
  );
}