import HeroSection from "./UI/HeroSection";
// import CarouselElement from "./UI/Carousel";
// import useScreenSize from "./hooks/useScreenSize";

export default function Home() {
  // const screenSize = useScreenSize(true);

  // let content;
  // if (screenSize !== "desktop") {
  //   content = <HeroSection />;
  // } else {
  //   content = <CarouselElement />;
  // }

  const content = <HeroSection />

  return <section id="home">{content}</section>;
}
