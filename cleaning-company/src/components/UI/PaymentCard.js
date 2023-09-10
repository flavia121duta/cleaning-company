import classes from "./PaymentCard.module.css";

export default function PaymentCard(props) {
  return (
    <div
      className={`${classes["payment-card"]} ${
        props.addSpecialClass && classes.specialClass
      }`}
      id={props.id}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div className={`${classes["price-title"]}`}>{props.price}</div>
      <div className={`${classes["type-of-cleaning"]}`}>{props.title}</div>
      <ul className={`${classes["cleaning-list"]}`}>
        {props.roomsList.map((room) => (
          <li>{room}</li>
        ))} 
      </ul>
    </div>
  );
}
