import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={classes.card}>
      <i className={`${classes.clock} fa-regular fa-clock`}></i>
      <div className={classes.title}>24/7 Opened</div>
      <div className={classes.text}>We work hard so you don't have to.</div>
    </div>
  );
}
