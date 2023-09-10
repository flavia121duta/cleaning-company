import classes from "./MobileMenuModal.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";

export default function MobileMenuModal(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <i
          className={`fa-regular fa-circle-xmark ${classes.close}`}
          onClick={props.onConfirm}
        ></i>
        <header className={classes.header}>
          <h2>{t("navigation.menu")}</h2>
        </header>
        <div>
          <ul className={`${classes["hidden-menu"]}`}>
            <li onClick={props.onConfirm}>
              <AnchorLink href="#hero-section" className="anchor-link">
                {t("navigation.home")}
              </AnchorLink>
            </li>
            <li onClick={props.onConfirm}>
              <AnchorLink href="#about-us" className="anchor-link">
                {t("navigation.about-us")}
              </AnchorLink>
            </li>
            <li onClick={props.onConfirm}>
              <AnchorLink href="#services" className="anchor-link">
                {t("navigation.services")}
              </AnchorLink>
            </li>
            <li onClick={props.onConfirm}>
              <AnchorLink href="#pricing" className="anchor-link">
                {t("navigation.pricing")}
              </AnchorLink>
            </li>
            <li onClick={props.onConfirm}>
              <AnchorLink href="#what-clients-say" className="anchor-link">
                {t("navigation.what-clients-say")}
              </AnchorLink>
            </li>
            <li onClick={props.onConfirm}>
              <AnchorLink href="#contact" className="anchor-link">
                {t("navigation.contact")}
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
