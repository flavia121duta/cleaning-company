import classes from "./MenuStrip.module.css";
import LanguageSelector from "./LanguageSelector";
import useScreenSize from "./hooks/useScreenSize";

export default function MenuStrip() {
  const screenSize = useScreenSize(true);

  return (
    <div className={classes.strip}>
      <div className={classes.details}>
        <LanguageSelector />
      </div>
      {screenSize !== "mobile" && (
        <div className={classes.details}>
          <i class="fa-solid fa-location-dot"></i>
          <a
            href="https://www.google.com/maps/place/Burj+al-Arab/@25.2528875,55.263217,15.5z/data=!4m9!3m8!1s0x3e5f6a576414cf2d:0xb3da71b879f0e038!5m2!4m1!1i2!8m2!3d25.1411914!4d55.1852468!16zL20vMDJtem05?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            1458 Euclid Avenue Irvine, CA 92614{" "}
          </a>
        </div>
      )}
      {screenSize === "desktop" && (
        <div className={classes.details}>
          <i className="fa-regular fa-envelope"></i>
          <a href="mailto:my_email@example.com">my_email@example.com</a>
        </div>
      )}
      <div className={classes.details}>
        <i className="fa-solid fa-phone"></i>
        <a href="tel:+40744423429">0744-423-429</a>
      </div>
    </div>
  );
}
