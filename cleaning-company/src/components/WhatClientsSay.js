import Testimonial from "./UI/Testimonial";
import classes from "./Payment.module.css";

export default function WhatClientsSay() {
  return (
    <div id="what-clients-say" className={`${classes["pricing-content"]}`}>
      <h2 className={`${classes["payment-title"]}`}>What Clients Say</h2>
      <hr className={classes.hr} />
      <p>
        Picanha spare ribs pariatur velit pork sirloin. Consequat capicola
        pastrami non, minim ribeye meatloaf consectetur pork loin ground round
        bacon quis t-bone labore.
      </p>

      <Testimonial />
    </div>
  );
}
