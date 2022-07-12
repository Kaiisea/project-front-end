import classes from "./Main.module.css";
import Profile from "../img/profile.jpg";
import Trailer from "../video/Trailer.mp4";
import Logo2 from "../img/logoArcoiris.png";

const Main = () => {
  return (
    <div>
      <div className={classes.h1Welcome}>
        <h1>Welcome &nbsp;to &nbsp;Poroland!</h1>
      </div>
      <div className={classes.centerAll}>
        <div className={classes.trailerDivBorder}>
          <img src={Logo2} className={classes.logoTitle} />
          <div className={classes.trailerDiv}>
            <video
              src={Trailer}
              autoPlay
              controls
              className={classes.trailer}
            ></video>
          </div>
        </div>
      </div>
      <div>
        <h2 className={classes.h2Section}>Who is the Porocornio's King?</h2>
        <div className={classes.divFlex}>
          <div className={classes.insideFlex}>
            <p className={classes.pAbout}>
              ¡Welcome porocornio! I'm Christian Cillekens, a surname that in my
              whole life I have ever pronounced well. That's where the idea of
              Cilleke01 comes from (I didn't think much of it, tbh). I'm 21
              years old and I'm a physiotherapy student. I stream from 18:30 to
              22:30 Spanish time, just chatting, playing videogames, trying to
              brighten up your evenings and that you brighten up mine. Visit us
              on Twitch.tv/Cilleke01! 🦄💜
            </p>
          </div>
          <div className={classes.insideFlexCenter}>
            <div className={classes.insideFlexBorder}>
              <div className={classes.insideFlexBorder2}>
                <img src={Profile} className={classes.photoAbout} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.spacing}>
      <h2 className={classes.h2Section}>Latest Clips</h2>
      </div><div className={classes.clipsDiv}>
        <button className={classes.buttonClips}>&lt;</button>
        <div className={classes.directionDiv}><div className={classes.borderOutClip}><div className={classes.borderInClip}><img src={Profile} className={classes.clips}/></div></div><h3 className={classes.clipsTitle}>Clip 1</h3></div>
        <div className={classes.directionDiv}><div className={classes.borderOutClip}><div className={classes.borderInClip}><img src={Profile} className={classes.clips}/></div></div><h3 className={classes.clipsTitle}>Clip 2</h3></div>
        <div className={classes.directionDiv}><div className={classes.borderOutClip}><div className={classes.borderInClip}><img src={Profile} className={classes.clips}/></div></div><h3 className={classes.clipsTitle}>Clip 3</h3></div>
        <button className={classes.buttonClips}>&gt;</button>
      </div>
    </div>
  );
};
export default Main;
