import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/loginSlice";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../img/logo.jpeg";

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
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {!logged && (
          <li className={classes.navRight}>
            Access
            <ul className={classes.dropDown}>
              <li>
                <Link to="/login">Which Porocornio are you?</Link>
              </li>
              <li>
                <Link to="/register">Sign in the Porocornio's Army</Link>
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
export default Header
// export function Header() {
//   return (
//     <header>
//       <ul className={classes.headerNav}>
//         <li><img src={logo} className={classes.logoHeader} /></li>
//         <li><a>Schedule</a></li>
//         <li><a>Shop</a></li>
//         <li><a>About</a></li>
//         <li className={classes.navRight}>
//           Access
//           <ul className={classes.dropdown}>
//             <li>
//               Which Porocornio are you?
//             </li>
//             <li>
//               Sign in the Porocornio's Army
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </header>
//   );
// }
