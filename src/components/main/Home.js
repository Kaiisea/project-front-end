import { Routes, Route, Link } from "react-router-dom";

import LoginDashboard from "./LoginDashboard";
import RegisterDashboard from "./RegisterDashboard";
import { RegisterDashboardMember } from "./RegisterDashboardMember";
import Shop from "../shop/Shop";
import About from "./About";
import Schedule from "./Schedule";
import Main from "./Main";
import News from "../news/News";
import News1 from "../news/News1";
import News2 from "../news/News2";
import News3 from "../news/News3";
import News4 from "../news/News4";
import Event from "../news/Event";
import AdminDashboard from "../adminDashboard/AdminDashboard";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.secondDiv}>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
          <Route path="/news1" element={<News1 />} />
          <Route path="/news2" element={<News2 />} />
          <Route path="/news3" element={<News3 />} />
          <Route path="/news4" element={<News4 />} />
          <Route path="/event" element={<Event />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
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
