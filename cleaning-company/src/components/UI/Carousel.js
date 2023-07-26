import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import classes from "./Carousel.module.css";

export default function CarouselElement() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={1500}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/top-slider-1.png?alt=media&token=648964bd-650a-41c5-8b38-362ae52cea43"
          alt="Young lady cleaning"
        />
        <Carousel.Caption className={classes.caption}>
          <h3>We can make your place sparkle</h3>
          <p>Professional. Affordable. Reliable.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className={`${classes["carousel-image"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/top-slider-2.png?alt=media&token=458a1bdc-9bec-4a57-a659-e401a291fdf5"
          alt="Man who uses the vacuum cleaner"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className={`${classes["carousel-image"]}`}
          src="https://firebasestorage.googleapis.com/v0/b/cleaning-company-f9b3e.appspot.com/o/top-slider-3.png?alt=media&token=9dd3823f-15da-459a-a889-9f0da5e51aaa"
          alt="Woman who changes sheets"
        />
      </Carousel.Item>
    </Carousel>
  );
}
