import classes from "./CleaningCard.module.css";

export default function CleaningCard(props) {
  return (
    <div className={`${classes["service-card"]} ${props.className}`}>
      <img
        src={props.src}
        alt={props.alt}
        className={`${classes["service-img"]}`}
      />
      <h2 className={`${classes["service-title"]}`}>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}
