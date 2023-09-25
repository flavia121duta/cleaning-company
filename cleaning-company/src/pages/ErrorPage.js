import classes from "./ErrorPage.module.css";
import MenuStrip from "../components/MenuStrip";
import poster from "../assets/images/cleaning-poster.jpeg";
import Footer from "../components/UI/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

export default function ErrorPage() {
  const { t } = useTranslation();
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
            {t("error-page.error-message-p1")}
          </p>
          <p>
          {t("error-page.error-message-p2")}
          </p>
          <p>{t("error-page.error-message-p3")}</p>

          <Link to="/">
            <button className={classes.button}>{t("error-page.button-message")}</button>
          </Link>
        </main>
      </div>

      <Footer />
    </div>
  );
}
