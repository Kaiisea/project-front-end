import { Routes, Route, Link } from "react-router-dom";
import styles from "./Main.module.css";
import LoginDashboard from "./LoginDashboard";
import RegisterDashboard from "./RegisterDashboard";
import { RegisterDashboardMember } from "./RegisterDashboardMember";
import { Home } from "./Home";
import { Shop } from "../shop/Shop"
import { About } from "./About";
import { Schedule } from "./Schedule"
import * as React from "react";

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<LoginDashboard />} />
        <Route path="/register" element={<RegisterDashboard />} />
        <Route path="/register-member" element={<RegisterDashboardMember />} />
      </Routes>
      </div>
  );
}
export default Main;