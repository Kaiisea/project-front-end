import classes from "./Main.module.css";
import Profile from "../img/profile.jpg";
import Instagram from "../img/Instagram.png";
import Twitter from "../img/Twitter.png";
import Twitch from "../img/Twitch.png";

const About = () => {
  return (
    <div>
      <h1>Who is the Porocornio's King?</h1>
      <div className={classes.divFlex}>
        <div className={classes.insideFlex}>
          <p className={classes.pAbout}>
            ¡Welcome porocornio! I'm Christian Cillekens, a surname that in my
            whole life I have ever pronounced well. That's where the idea of
            Cilleke01 comes from (I didn't think much of it, tbh). I'm 21 years
            old and I'm a physiotherapy student. I stream from 18:30 to 22:30
            Spanish time, just chatting and playing videogames. Visit us! 🦄💜
          </p>
        </div>
        <div className={classes.insideFlexCenter}>
          <div className={classes.insideFlexBorder}>
            <div className={classes.insideFlexBorder2}>
              <img src={Profile} className={classes.photoAbout} />
            </div>
          </div>
        </div>
        <div className={classes.insideFlexCenter}>
          <div className={classes.divSocialMediaBorder}>
            <div className={classes.divSocialMedia}>
              <img src={Instagram} className={classes.photoSocialMedia} />
              <div className={classes.divSocialMediaTitle}><a href="https://www.instagram.com/christiian4//">Instagram</a></div>
            </div>
            <div className={classes.divSocialMedia}>
              <img src={Twitter} className={classes.photoSocialMedia} />
              <div className={classes.divSocialMediaTitle}><a href="https://www.twitter.com/Cilleke_">Twitter</a></div>
            </div>
            <div className={classes.divSocialMedia}>
              <img src={Twitch} className={classes.photoSocialMedia} />
              <div className={classes.divSocialMediaTitle}><a href="https://www.twitch.tv/search?term=cilleke01/">Twitch</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
