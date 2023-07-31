import PaymentCard from "./UI/PaymentCard";
import classes from "./Payment.module.css";
import BeginOfSection from "./UI/BeginOfSection";

import { useState } from "react";

export default function Payment() {
  const [paymentCardActive, setPaymentCardActive] = useState(2);

  const onMouseEnter = (event) => {
    if (event.currentTarget !== event.target) return;
    setPaymentCardActive(parseInt(event.target.id));
  };

  const onMouseLeave = (event) => {
    
    setPaymentCardActive(2);

  };

  return (
    <section id="pricing" className={`${classes["pricing-content"]}`}
    >
      <BeginOfSection
        title="Pricing Tables"
        text="Picanha spare ribs pariatur velit pork sirloin. Consequat capicola
      pastrami non, minim ribeye meatloaf consectetur pork loin ground round
      bacon quis t-bone labore."
      />
      <div className={classes.payment}>
        <PaymentCard
          id="1"
          addSpecialClass={paymentCardActive === 1}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}

        />
        <PaymentCard
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id="2"
          addSpecialClass={paymentCardActive === 2}
        />
        <PaymentCard
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id="3"
          addSpecialClass={paymentCardActive === 3}
        />
      </div>
    </section>
  );
}
