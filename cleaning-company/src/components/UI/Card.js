import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={classes.card}>
      <i className={`${classes.icon} ${props.icon}`}></i>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
}
