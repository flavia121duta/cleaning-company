import classes from "./AboutUs.module.css";
import useScreenSize from "./hooks/useScreenSize";
import BeginOfSection from "../components/UI/BeginOfSection";
import Card from "./UI/Card";

export default function AboutUs() {
  const screenSize = useScreenSize(true);

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
          title="About Us"
          text="We are your trusted partner for exceptional cleaning services. We leave no dust behind, making your space shine like never before. Our dedicated team is committed to delivering the highest standards of cleanliness, reliability, and customer satisfaction."
        />

        <div className={`${classes["container-of-four"]}`}>
          <Card
            icon="fa-regular fa-clock"
            title="24/7 Opened"
            text="We work hard so you don’t have to."
          />
          <Card
            icon="fa-solid fa-people-group"
            title="Professional Staff"
            text="We are professional and experienced cleaning staff."
          />
          <Card
            icon="fa-regular fa-thumbs-up"
            title="Fair Prices"
            text="Fair-priced cleaning services for spotless results you'll love."
          />
          <Card
            icon="fa-solid fa-award"
            title="Certification"
            text="Cleaners certified & highly experienced professionals."
          />
        </div>
      </main>
    </section>
  );
}
