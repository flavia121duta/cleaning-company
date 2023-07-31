import classes from "./TestimonialDetails.module.css";

export default function TestimonialDetails(props) {
  return (
    <div
      onDragStart={props.onDragStart}
      className={`${classes["testimonial-card"]}`}
    >
      <img
        src={props.src}
        alt="avatar of the user"
        className={classes.avatar}
      />
      <p>
        {props.opinion}
      </p>
      <h3>{props.clientName}</h3>
    </div>
  );
}
