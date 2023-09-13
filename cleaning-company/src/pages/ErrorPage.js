import classes from "./ErrorPage.module.css";
import MenuStrip from "../components/MenuStrip";
import poster from "../assets/images/cleaning-poster.jpeg";
import Footer from "../components/UI/Footer";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className={`${classes["error-main-body"]}`}>
      <MenuStrip />
      <div className={`${classes["error-grid"]}`}>
        <h1 className={classes.warning}>Oops!</h1>
        <div className={classes.monster}>
          <img src={poster} alt="clean and organized space with a playful twist" />
        </div>
        <main className={`${classes["error-content"]}`}>
          <p>
            It looks like you've wandered into our dustiest corner! Our cleaning
            crew is on the way to tidy up this mess. In the meantime, here's a
            joke to keep you entertained:
          </p>
          <p>
            Why don't mops ever get invited to parties? Because they always
            leave a wet mess behind!
          </p>
          <p>We'll have this page squeaky clean in no time!</p>

          <Link to="/">
            <button className={classes.button}>Back to home</button>
          </Link>
        </main>
      </div>

      <Footer />
    </div>
  );
}
