import classes from "./BeginOfSection.module.css";

export default function TitleOfSection(props) {
  return (
    <div className={`${props.className} ${classes["title-container"]}`}>
      <h2 className={`${classes.title} ${props["title-style"]}`}>{props.title}</h2>
      <hr className={`${classes["horizontal-line"]}`} />
      <p>{props.text}</p>
    </div>
  );
}
