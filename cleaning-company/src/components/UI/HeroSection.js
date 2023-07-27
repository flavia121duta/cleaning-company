import classes from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={`${classes["hero-container"]}`}>
      <div className={`${classes["hero-image"]}`}>
        <div className={`${classes["hero-text"]}`}>
          <h1 style={{ fontSize: "50px" }}>We can make your place sparkle</h1>
          <p>Professional. Affordable. Reliable.</p>
        </div>
      </div>
    </div>
  );
}
