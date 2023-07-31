import classes from "./ParallaxAboutClients.module.css";
import GoodOpinionCard from "./GoodOpinionCard";

export default function ParallaxAboutClients() {
    return <div className={`${classes["clients-parallax"]}`}>
        <GoodOpinionCard icon="fa-solid fa-house" number="1000" title="Project Done" />
        <GoodOpinionCard icon="fa-regular fa-heart" number="950" title="Happy Clients" />
        <GoodOpinionCard icon="fa-regular fa-calendar" number="10" title="Years of Experience" />
        <GoodOpinionCard icon="fa-solid fa-user-group" number="25" title="People Working" />
    </div>
}