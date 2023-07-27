import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TestimonialDetails from "./TestimonialDetails";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <TestimonialDetails onDragStart={handleDragStart} role="presentation" />,
  <TestimonialDetails onDragStart={handleDragStart} role="presentation" />,
  <TestimonialDetails onDragStart={handleDragStart} role="presentation" />,
  <TestimonialDetails onDragStart={handleDragStart} role="presentation" />,
];

const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 3,
      itemsFit: 'contain',
    },
  };

export default function Testimonial() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoHeight={true}
      infinite={true}
      keyboardNavigation={true}
      responsive={responsive}
      controlsStrategy="responsive"
      disableSlideInfo={false}
      disableButtonsControls  
    />
  );
}
