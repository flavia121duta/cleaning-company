import CarouselElement from "./UI/Carousel";
import useScreenSize from "./hooks/useScreenSize";

export default function Home() {
  const screenSize = useScreenSize(true);
  
  let content;
  if (screenSize !== "desktop") {
    content = (
      <img
        src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/top-slider-1.png?alt=media&token=648964bd-650a-41c5-8b38-362ae52cea43"
        alt="Young lady cleaning"
      />
    );
  } else {
    content = <CarouselElement />;
  }

  return <div id="home">{content}</div>;
}
