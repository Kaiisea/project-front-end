import { Routes, Route, Link } from "react-router-dom";

import LoginDashboard from "./LoginDashboard";
import RegisterDashboard from "./RegisterDashboard";
import { RegisterDashboardMember } from "./RegisterDashboardMember";
import  Shop  from "../shop/Shop"
// import { About } from "./About";
import  Schedule  from "./Schedule"
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.secondDiv}>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<LoginDashboard />} />
          <Route path="/register" element={<RegisterDashboard />} />
          <Route
            path="/register-member"
            element={<RegisterDashboardMember />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default Home;