import { useState } from "react";
import MobileMenuModal from "./UI/MobileMenuModal.js";
import classes from "./MobileNavigation.module.css";
import logo from "../assets/Logo.svg";

export default function MobileNavigation() {
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  const showMobileMenuHandler = () => {
    setMobileMenuIsVisible((prev) => !prev);
  };

  const modalHandler = () => {
    setMobileMenuIsVisible(false);
  };

  return (
    <nav className={`${classes["mobile-navigation"]}`}>
      <div className={`${classes["mobile-menu"]}`}>
        <img
          className={`${classes["mobile-logo"]}`}
          src={logo}
          alt="Double R"
        />
        <i onClick={showMobileMenuHandler} className="fa-solid fa-bars"></i>
      </div>
      {mobileMenuIsVisible && <MobileMenuModal onConfirm={modalHandler} />}
    </nav>
  );
}
