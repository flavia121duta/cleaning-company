import classes from "./MainNavigation.module.css";
import logo from "../assets/images/logo.png";
import MobileMenuModal from "./UI/MobileMenuModal.js";
import useScreenSize from "./hooks/useScreenSize";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function MainNavigation() {
  const screenSize = useScreenSize(true);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  const desktopNavigation = (
    <nav className={classes.navigation}>
      <ul className={`${classes["menu-options"]}`}>
        <li>
          <AnchorLink href="#home" className="anchor-link">
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about-us" className="anchor-link">
            About Us
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#services" className="anchor-link">
            Services
          </AnchorLink>
        </li>

        <li className={classes.logo}>
          <img src={logo} alt="broom and bubbles" />
        </li>

        <li>
          <AnchorLink href="#pricing" className="anchor-link">
            Pricing
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#what-clients-say" className="anchor-link">
            What Clients Say
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" className="anchor-link">
            Contact
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );

  const showMobileMenuHandler = () => {
    setMobileMenuIsVisible((prev) => !prev);
  };

  const modalHandler = () => {
    setMobileMenuIsVisible(false);
  };

  const mobileNavigation = (
    <nav className={classes.navigation}>
      <div className={`${classes["mobile-menu"]}`}>
        <img
          className={`${classes["mobile-logo"]}`}
          src={logo}
          alt="broom and bubbles"
        />
        <i onClick={showMobileMenuHandler} className="fa-solid fa-bars"></i>
      </div>
      {mobileMenuIsVisible && <MobileMenuModal onConfirm={modalHandler} />}
    </nav>
  );

  return (
    <header className={`${classes["navigation-header"]}`}>
      {screenSize !== "mobile" && desktopNavigation}
      {screenSize === "mobile" && mobileNavigation}
    </header>
  );
}
