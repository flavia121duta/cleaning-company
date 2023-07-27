import classes from "./Services.module.css";
import CleaningCard from "./UI/CleaningCard";

export default function Services() {
  return (
    <div id="services" className={classes.parallax}>
      <h2>Our Services</h2>
      <hr />
      <p className={classes.text}>
        Our professional and experienced cleaning staff does the job right the
        first time, giving you confidence that you office and building will
        always look their best.
      </p>

      <div className={`${classes["services-contaier"]}`}>
        <CleaningCard />
        <CleaningCard />
        <CleaningCard />
        <CleaningCard />
        <CleaningCard />
        <CleaningCard />
      </div>

    </div>
  );
}
