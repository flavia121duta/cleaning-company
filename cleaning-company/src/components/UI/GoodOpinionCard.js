import classes from "./GoodOpinionCard.module.css";

export default function GoodOpinionCard(props) {
    return <div className={`${classes["opinion-card"]}`}>
        <i className={`${props.icon} ${classes["opinion-icon"]}`}></i>
        <h2>{props.number}</h2>
        <p>{props.title}</p>
    </div>
}