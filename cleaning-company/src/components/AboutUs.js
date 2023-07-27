import classes from "./AboutUs.module.css";
import useScreenSize from "./hooks/useScreenSize";
import Card from "./UI/Card";

export default function AboutUs() {
  const screenSize = useScreenSize(true);

  return (
    <div id="about-us" className={classes.container}>
      {screenSize !== "mobile" && (
        <img className={`${classes["man-cleaning"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/man_cleaning.png?alt=media&token=7c6c8eb2-ef2b-4401-9d50-7b0d565975d0"
          alt="a man cleaning"
        />
      )}
      
      <main className={`${classes["about-us"]}`}>
        <h2>About Us</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          facilisis vitae massa ut maximus. Sed sit amet vulputate ante. Nulla
          elit libero, hendrerit et ligula sed, vestibulum tempor lorem.{" "}
        </p>

        <div className={`${classes["container-of-four"]}`}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
