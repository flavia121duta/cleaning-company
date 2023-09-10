import HeroSection from "../components/UI/HeroSection";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Payment from "../components/Payment";
import WhatClientsSay from "../components/WhatClientsSay";
import ParallaxAboutClients from "../components/UI/ParallaxAboutClients";
import Footer from "../components/UI/Footer";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Payment />
      <ParallaxAboutClients />
      <WhatClientsSay />
      <Footer />
    </>
  );
}
