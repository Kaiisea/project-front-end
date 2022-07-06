import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/loginSlice";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../img/logo.jpeg";
import Instagram from "../img/InstagramCircle.png";
import Twitter from "../img/TwitterCircle.png";
import Twitch from "../img/TwitchCircle.png";

function Header() {
  const logged = useSelector((state) => state.login.login.isLogged);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(loginActions.logOut());
  };
  return (
    <header>
      <ul className={classes.headerNav}>
        <li>
          <Link to="/">
            <img src={logo} className={classes.logoHeader} />
          </Link>
        </li>
        {!logged && (<div className={classes.socialDiv}>
        <div className={classes.socialBorder}>
        <li>
          <a href="https://www.instagram.com/christiian4/">
            <img src={Instagram} className={classes.logoSocialMedia} />
          </a>
        </li>
        </div>
        <div className={classes.socialBorder}>
        <li>
          <a href="https://www.twitter.com/Cilleke_/">
            <img src={Twitter} className={classes.logoSocialMedia} />
          </a>
        </li>
        </div>
        <div className={classes.socialBorder}>
        <li>
          <a href="https://www.twitch.tv/cilleke01">
            <img src={Twitch} className={classes.logoSocialMedia} />
          </a>
        </li>
        </div>
        </div>)}
        {logged && (
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        )}
        {!logged && (
          <li className={classes.navRight}>
            Access
            <ul className={classes.dropDown}>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
              <li>
                <Link to="/register">Sign up </Link>
              </li>
            </ul>
          </li>
        )}
        {logged && (
          <li className={classes.navRight}>
            <Link to="/" onClick={handleLogOut}>
              Log out
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}
export default Header;
