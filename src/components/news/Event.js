import classes from "./News.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, signIn } from "../../store/loginSlice";
import { Navigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import Alert from "../alert/Alert";

const Event = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  console.log(user);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const [data, setData] = useState({
    email: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(data)).then(() => {
      setData({
        email: "",
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
    <div className={classes.newsFlex}>
      <h1 className={classes.mainTitle}>E V E N T S</h1>
      <div className={classes.eventBorderOut}>
        <div className={classes.eventBorderIn}>
          <h1 className={classes.eventH1}>Minecraft Server</h1>
          <p className={classes.eventInvisible}>
            Pititoland is about to start! Wait, you don't know what it is?
            Pititoland is the Minecraft server of our community, the
            Porocornio's Army. Here you can enjoy countless super fun events and
            intriguing and mysterious roles with other porocornios.In order to
            maintain this server, being hosted by a pc that works 24/7 so that
            anyone can play at any time, you have to pay at least a Twitch
            subscription. So, if you want to be part of Pititoland, click on the
            panel and contribute to keep this going!
          </p>
          <form className={classes.eventForm} onSubmit={handleSubmit}>
            <label htmlFor="email" className={classes.label}>
              Enter your email to participate
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
              className={`${classes.field} ${classes.formSpacing}`}
            />
            <div className={classes.buttonDiv}>
              <button type="submit" className={classes.button}>
                P A R T I C I P A T E
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.eventBorderOut}>
        <div className={classes.eventBorderIn}>
          <h1 className={classes.eventH1}>Extensible streaming</h1>
          <p className={classes.eventInvisible}>
            Next July 15th, I'm going to make an extensible streaming where you,
            little porocornio, will have the power to decide how long it will
            last, increasing its duration with your subscriptions, bits and
            donations. During this streaming, I will be playing with you
            different multiplayer videogames like Among Us or Gartic Phone, so
            if you want to participate, register right now with your email. What
            are you waiting for?
          </p>
          <form className={classes.eventForm} onSubmit={handleSubmit}>
            <label htmlFor="email" className={classes.label}>
              Enter your email to participate
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
              className={`${classes.field} ${classes.formSpacing}`}
            />
            <div className={classes.buttonDiv}>
              <button type="submit" className={classes.button}>
                P A R T I C I P A T E
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.eventBorderOut}>
        <div className={classes.eventBorderIn}>
          <h1 className={classes.eventH1}>Special 1000 followers</h1>
          <p className={classes.eventInvisible}>
            As you know, last July 10th we reached the unthinkable number of 1k
            porocornios and to celebrate it, I will make a special streaming,
            where I will show Cilleke01's exclusive content and I will make draw
            between those who have registered their participation. Will you be
            the lucky one?
          </p>
          <form className={classes.eventForm} onSubmit={handleSubmit}>
            <label htmlFor="email" className={classes.label}>
              Enter your email to participate
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
              className={`${classes.field} ${classes.formSpacing}`}
            />
            <div className={classes.buttonDiv}>
              <button type="submit" className={classes.button}>
                P A R T I C I P A T E
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.eventBorderOut}>
        <div className={classes.eventBorderIn}>
          <h1 className={classes.eventH1}>Happy Birthday Cille!</h1>
          <p className={classes.eventInvisible}>
            Happy birthday to you, happy birthday Cille, your porocornios wish
            you a very happy streaming! Do you want to congratulate Cille on his
            birthday streaming and also win one of the gifts that will be drawed
            to celebrate it? Then join the biggest birthday party right now!
          </p>
          <form className={classes.eventForm} onSubmit={handleSubmit}>
            <label htmlFor="email" className={classes.label}>
              Enter your email to participate
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
              className={`${classes.field} ${classes.formSpacing}`}
            />
            <div className={classes.buttonDiv}>
              <button type="submit" className={classes.button}>
                P A R T I C I P A T E
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Event;
