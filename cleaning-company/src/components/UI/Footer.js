import classes from "./Footer.module.css";
import useScreenSize from "../hooks/useScreenSize";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentDate = new Date();
  const currenYear = currentDate.getFullYear();

  const screenSize = useScreenSize(true);
  const [contactInfoIsVisible, setContactInfoIsVisible] = useState(true);
  const [scheduleIsVisible, setScheduleIsVisible] = useState(true);

  const hideContactInfoHandler = () => {
    setContactInfoIsVisible((prev) => !prev);
  };

  const hideScheduleHandler = () => {
    setScheduleIsVisible((prev) => !prev);
  };

  const { t } = useTranslation();

  return (
    <>
      <footer id="contact">
        <div className={classes.footer}>
          <div className={`${classes["contact-info"]}`}>
            <div
              className={classes.hideInfoSection}
              onClick={hideContactInfoHandler}
            >
              <h2>{t("footer.contact-info")}</h2>
              {screenSize === "mobile" && (
                <div className={classes.chevron}>
                  {contactInfoIsVisible ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </div>
              )}
            </div>
            <hr />
            {(screenSize !== "mobile" || !contactInfoIsVisible) && (
              <>
                <div className={classes.email}>
                  <i className="fa-regular fa-envelope"></i>
                  <a href="mailto:my_email@example.com">my_email@example.com</a>
                </div>

                <div className={classes.telephone}>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+40744423429">0744-423-429</a>
                </div>
              </>
            )}
          </div>

          <div className={`${classes["contact-info"]}`}>
            <div
              className={classes.hideInfoSection}
              onClick={hideScheduleHandler}
            >
              <h2>{t("footer.opening-hours.title")}</h2>
              {screenSize === "mobile" && (
                <div className={classes.chevron}>
                  {scheduleIsVisible ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </div>
              )}
            </div>
            <hr />
            {(screenSize !== "mobile" || !scheduleIsVisible) && (
              <div className={classes.schedule}>
                <div>{t("footer.opening-hours.mon-thu")}</div>
                <div>09:00 - 17:00</div>
                <div>{t("footer.opening-hours.fri-sat")}</div>
                <div>09:00 - 17:00</div>
                <div>{t("footer.opening-hours.sunday")}</div>
                <div>{t("footer.opening-hours.closed")}</div>
              </div>
            )}
          </div>
        </div>
      </footer>
      <div className={classes.copyright}>
        © {currenYear} DOUBLE RR. All rights reserved.
      </div>
    </>
  );
}
