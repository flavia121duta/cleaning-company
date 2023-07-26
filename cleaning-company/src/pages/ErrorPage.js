// import classes from "./ErrorPage.module.css";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <h1>Error 404</h1>
      <main>
        <p>Something went wrong</p>
        <p>This page couldn't be reached</p>
      </main>
    </>
  );
}
