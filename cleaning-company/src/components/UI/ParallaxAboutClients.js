import classes from "./ParallaxAboutClients.module.css";
import GoodOpinionCard from "./GoodOpinionCard";
import { useTranslation } from 'react-i18next'

export default function ParallaxAboutClients() {
    const { t } = useTranslation();

    return <div className={`${classes["clients-parallax"]}`}>
        <GoodOpinionCard icon="fa-solid fa-house" number="1000" title={t("parallax-about-clients.projects-done")} />
        <GoodOpinionCard icon="fa-regular fa-heart" number="950" title={t("parallax-about-clients.happy-clients")} />
        <GoodOpinionCard icon="fa-regular fa-calendar" number="10" title={t("parallax-about-clients.experience")} />
        <GoodOpinionCard icon="fa-solid fa-user-group" number="25" title={t("parallax-about-clients.people-working")} />
    </div>
}