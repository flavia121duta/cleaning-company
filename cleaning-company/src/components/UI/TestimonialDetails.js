import classes from "./TestimonialDetails.module.css";

export default function TestimonialDetails(props) {
  return (
    <div
      onDragStart={props.onDragStart}
      className={`${classes["testimonial-card"]}`}
    >
      <img
        src="https://webdesign-finder.com/pretty-press/wp-content/uploads/2017/01/team-3.png"
        alt="avatar of teh user"
        className={classes.avatar}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        consequat lobortis metus vitae maximus. Nam a lacus tempus, lacinia est
        non, cursus elit.
      </p>
      <h3>Nume utilizator</h3>
    </div>
  );
}
