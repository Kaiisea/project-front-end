import classes from "./AdminDashboard.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/loginSlice"

const AdminDashboard = () => {
    // const [allEvents, setAllEvents] = useState([]);
    const dispatch = useDispatch();
    // const events = useSelector((state) => state.login.data.info);
    // useEffect(() => {
    //     dispatch(getEvents())
    //       .then((result) => {

    //     })
    //     .catch((error) => console.log(error));
    // }, []);
    console.log(getEvents);
  return (
    <div>
      <h1 className={classes.adminTitle}>A D M I N &nbsp;D A S H B O A R D</h1>
    </div>
  );
};
export default AdminDashboard;
