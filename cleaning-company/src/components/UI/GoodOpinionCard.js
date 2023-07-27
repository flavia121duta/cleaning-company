import classes from "./GoodOpinionCard.module.css";

export default function GoodOpinionCard() {
    return <div className={`${classes["opinion-card"]}`}>
        <i className={`fa-solid fa-house ${classes["opinion-icon"]}`}></i>
        <h2>1000</h2>
        <p>Projects Done</p>
    </div>
}