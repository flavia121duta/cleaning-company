import classes from "./AboutUs.module.css";
import useScreenSize from "./hooks/useScreenSize";
import BeginOfSection from "../components/UI/BeginOfSection";
import Card from "./UI/Card";

import { useTranslation } from 'react-i18next'

export default function AboutUs() {
  const screenSize = useScreenSize(true);
  const { t } = useTranslation();

  return (
    <section id="about-us" className={classes.container}>
      {screenSize !== "mobile" && (
        <img
          className={`${classes["man-cleaning"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/man_cleaning.png?alt=media&token=7c6c8eb2-ef2b-4401-9d50-7b0d565975d0"
          alt="a man cleaning"
        />
      )}

      <main className={`${classes["about-us"]}`}>
        <BeginOfSection
          title={t("about-us.title")}
          text={t("about-us.text")}
        />

        <div className={`${classes["container-of-four"]}`}>
          <Card
            icon="fa-regular fa-clock"
            title={t("about-us.options.opened.title")}
            text={t("about-us.options.opened.text")}
          />
          <Card
            icon="fa-solid fa-people-group"
            title={t("about-us.options.staff.title")}
            text={t("about-us.options.staff.text")}
          />
          <Card
            icon="fa-regular fa-thumbs-up"
            title={t("about-us.options.prices.title")}
            text={t("about-us.options.prices.text")}
          />
          <Card
            icon="fa-solid fa-award"
            title={t("about-us.options.certification.title")}
            text={t("about-us.options.certification.text")}
          />
        </div>
      </main>
    </section>
  );
}
