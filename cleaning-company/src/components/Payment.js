import PaymentCard from "./UI/PaymentCard";
import classes from "./Payment.module.css";
import BeginOfSection from "./UI/BeginOfSection";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Payment() {
  const [paymentCardActive, setPaymentCardActive] = useState(2);

  const onMouseEnter = (event) => {
    if (event.currentTarget !== event.target) return;
    setPaymentCardActive(parseInt(event.target.id));
  };

  const onMouseLeave = (event) => {
    setPaymentCardActive(2);
  };

  const { t } = useTranslation();

  return (
    <section id="pricing" className={`${classes["pricing-content"]}`}>
      <BeginOfSection title={t("pricing.title")} text={t("pricing.text")} />
      <div className={classes.payment}>
        <PaymentCard
          id="1"
          addSpecialClass={paymentCardActive === 1}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          title={t("pricing.options.regular-cleaning.title")}
          price={t("pricing.options.regular-cleaning.price")}
          roomsList={[
            t("pricing.options.regular-cleaning.places.living-room"),
            t("pricing.options.regular-cleaning.places.common-areas"),
            t("pricing.options.regular-cleaning.places.kitchen"),
            t("pricing.options.regular-cleaning.places.dining-room"),
          ]}
          key={Math.random()}
        />
        <PaymentCard
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id="2"
          addSpecialClass={paymentCardActive === 2}
          title={t("pricing.options.green-cleaning.title")}
          price={t("pricing.options.green-cleaning.price")}
          roomsList={[
            t("pricing.options.green-cleaning.places.living-room"),
            t("pricing.options.green-cleaning.places.common-areas"),
            t("pricing.options.green-cleaning.places.kitchen"),
            t("pricing.options.green-cleaning.places.dining-room"),
          ]}
          key={Math.random()}
        />
        <PaymentCard
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id="3"
          addSpecialClass={paymentCardActive === 3}
          title={t("pricing.options.deep-cleaning.title")}
          price={t("pricing.options.deep-cleaning.price")}
          roomsList={[
            t("pricing.options.deep-cleaning.places.living-room"),
            t("pricing.options.deep-cleaning.places.common-areas"),
            t("pricing.options.deep-cleaning.places.kitchen"),
            t("pricing.options.deep-cleaning.places.dining-room"),
          ]}
          key={Math.random()}
        />
      </div>
    </section>
  );
}
