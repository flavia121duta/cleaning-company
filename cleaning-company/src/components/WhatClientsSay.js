import Testimonial from "./UI/Testimonial";
import BeginOfSection from "./UI/BeginOfSection";
import classes from "./Payment.module.css";

export default function WhatClientsSay() {
  return (
    <section id="what-clients-say" className={`${classes["pricing-content"]}`}>
      <BeginOfSection
        title="What Clients Say"
        text="At Pretty Press we take immense pride in delivering exceptional cleaning services to our valued clients. But don't just take our word for it! Read what some of our satisfied customers have to say about their experience with us."
      />

      <Testimonial />
    </section>
  );
}
