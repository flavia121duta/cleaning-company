import Testimonial from "./UI/Testimonial";
import BeginOfSection from "./UI/BeginOfSection";
import classes from "./Payment.module.css";
import { useTranslation } from 'react-i18next';

export default function WhatClientsSay() {
  const { t } = useTranslation();
  return (
    <section id="what-clients-say" className={`${classes["pricing-content"]}`}>
      <BeginOfSection
        title={t("what-clients-say.title")}
        text={t("what-clients-say.text")}
      />

      <Testimonial />
    </section>
  );
}
