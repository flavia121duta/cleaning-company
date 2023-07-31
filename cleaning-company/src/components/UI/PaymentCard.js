import classes from "./PaymentCard.module.css";

// TODO: add props
export default function PaymentCard(props) {
  return (
    <div
      className={`${classes["payment-card"]} ${
        props.addSpecialClass && classes.specialClass
      }`}
      id={props.id}
      onMouseEnter={ props.onMouseEnter}
      onMouseLeave={ props.onMouseLeave}
    >
      <div className={`${classes["price-title"]}`}>99 €</div>
      <div className={`${classes["type-of-cleaning"]}`}>Regular Cleaning</div>
      <ul className={`${classes["cleaning-list"]}`}>
        <li>Living room</li>
        <li>Common areas</li>
        <li>Kitchen</li>
        <li>Dining room</li>
      </ul>
    </div>
  );
}
