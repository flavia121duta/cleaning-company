import classes from "./ParallaxAboutClients.module.css";
import GoodOpinionCard from "./GoodOpinionCard";
import { useTranslation } from 'react-i18next'

export default function ParallaxAboutClients() {
    const { t } = useTranslation();

    const dateOfEstablishment = new Date(2020, 0, 1);
    const today = new Date();

    const years = today.getFullYear() - dateOfEstablishment.getFullYear();

    return <div className={`${classes["clients-parallax"]}`}>
        <GoodOpinionCard icon="fa-solid fa-house" number="1000" title={t("parallax-about-clients.projects-done")} />
        <GoodOpinionCard icon="fa-regular fa-heart" number="950" title={t("parallax-about-clients.happy-clients")} />
        <GoodOpinionCard icon="fa-regular fa-calendar" number={years} title={t("parallax-about-clients.experience")} />
        <GoodOpinionCard icon="fa-solid fa-user-group" number="25" title={t("parallax-about-clients.people-working")} />
    </div>
}