import classes from "./HeroSection.module.css";
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <div id="hero-section" className={`${classes["hero-container"]}`}>
      <div className={`${classes["hero-image"]}`}>
        <div className={`${classes["hero-text"]}`}>
          <h1 style={{ fontSize: "50px" }}>{t("hero-section.h1")}</h1>
          <p>{t("hero-section.p")}</p>
        </div>
      </div>
    </div>
  );
}
