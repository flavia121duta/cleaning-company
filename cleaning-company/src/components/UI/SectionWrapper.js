import classes from "./SectionWrapper.module.css";

export default function SectionWrapper(props) {
  return (
    <section id={props.id} className={`${props.className} ${classes.container}`}>
      <div className={classes.header}>
        <h2 className={`${classes["title-style"]}`}>{props.title}</h2>
        <hr className={`${classes["horizontal-line"]}`} />
        <p className={`${classes["text-style"]}`}>{props.text}</p>
      </div>
      {props.children}
    </section>
  );
}
