import Testimonial from "./UI/Testimonial";
import classes from "./Payment.module.css";
import SectionWrapper from "./UI/SectionWrapper";
import { useTranslation } from 'react-i18next';

export default function WhatClientsSay() {
  const { t } = useTranslation();
  return (
    <SectionWrapper id="what-clients-say" className={`${classes["pricing-content"]}`} title={t("what-clients-say.title")} text={t("what-clients-say.text")}>
      <Testimonial />
    </SectionWrapper>
  );
}
