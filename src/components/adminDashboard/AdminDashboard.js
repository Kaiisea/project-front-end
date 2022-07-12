import classes from "./AdminDashboard.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/loginSlice";

const AdminDashboard = () => {
    

  return (
    <div>
      <h1 className={classes.adminTitle}>A D M I N &nbsp;D A S H B O A R D</h1>
    </div>
  );
};
export default AdminDashboard;
