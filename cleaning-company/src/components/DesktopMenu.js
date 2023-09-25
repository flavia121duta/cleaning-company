import classes from "./DesktopMenu.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";
import logo from "../assets/Logo.svg";

export default function DesktopMenu() {
  const { t } = useTranslation();

  return (
    <nav className={classes.navigation}>
      <ul className={`${classes["menu-options"]}`}>
        <li>
          <AnchorLink href="#hero-section" className="anchor-link">
            {t("navigation.home")}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about-us" className="anchor-link">
            {t("navigation.about-us")}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#services" className="anchor-link">
            {t("navigation.services")}
          </AnchorLink>
        </li>

        <li className={classes.logo}>
          <AnchorLink href="#hero-section" className="anchor-link">
            <img src={logo} alt="Double R" />
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#pricing" className="anchor-link">
            {t("navigation.pricing")}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#what-clients-say" className="anchor-link">
            {t("navigation.what-clients-say")}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" className="anchor-link">
            {t("navigation.contact")}
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
}
