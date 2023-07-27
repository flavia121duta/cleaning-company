import PaymentCard from "./UI/PaymentCard";
import classes from "./Payment.module.css";

import { useState } from "react";

export default function Payment() {
  const [paymentCardActive, setPaymentCardActive] = useState(2);

  const mouseOverHandler = (event) => {
    if (event.currentTarget !== event.target) return;
    setPaymentCardActive(parseInt(event.target.id));
  };

  const mouseOutHandler = (event) => {
    
  };

  return (
    <div id="pricing" className={`${classes["pricing-content"]}`}>
      <h2 className={`${classes["payment-title"]}`}>Pricing Tables</h2>
      <hr className={classes.hr} />
      <p>
        Picanha spare ribs pariatur velit pork sirloin. Consequat capicola
        pastrami non, minim ribeye meatloaf consectetur pork loin ground round
        bacon quis t-bone labore.
      </p>
      <div className={classes.payment}>
        <PaymentCard
          onMouseOverCapture={mouseOverHandler}
          id="1"
          addSpecialClass={paymentCardActive === 1}
          onMouseOut={mouseOutHandler}
        />
        <PaymentCard
          onMouseOverCapture={mouseOverHandler}
          id="2"
          addSpecialClass={paymentCardActive === 2}
        />
        <PaymentCard
          onMouseOverCapture={mouseOverHandler}
          id="3"
          addSpecialClass={paymentCardActive === 3}
        />
      </div>
    </div>
  );
}
