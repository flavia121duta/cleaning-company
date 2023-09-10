import classes from "./MainNavigation.module.css";
import useScreenSize from "./hooks/useScreenSize";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function MainNavigation() {
  const screenSize = useScreenSize(true);

  return (
    <header className={`${classes["navigation-header"]}`}>
      {screenSize === "mobile" ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
}
