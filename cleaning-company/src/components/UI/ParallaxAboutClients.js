import classes from "./ParallaxAboutClients.module.css";
import GoodOpinionCard from "./GoodOpinionCard";

export default function ParallaxAboutClients() {
    return <div className={`${classes["clients-parallax"]}`}>
        <GoodOpinionCard />
        <GoodOpinionCard />
        <GoodOpinionCard />
        <GoodOpinionCard />
    </div>
}