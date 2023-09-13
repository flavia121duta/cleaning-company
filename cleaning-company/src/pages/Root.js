import MenuStrip from "../components/MenuStrip";
import MainNavigation from "../components/MainNavigation";
import Wrapper from "../components/UI/Wrapper";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Wrapper>
      <MenuStrip />
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
