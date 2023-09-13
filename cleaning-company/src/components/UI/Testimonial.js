import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TestimonialDetails from "./TestimonialDetails";
import "./Testimonial.css";
import { useEffect, useState } from "react";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};

export default function Testimonial() {
  const [opinionsFromClients, setOpinionsFromClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const selectedLanguage = localStorage.getItem("language");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cleaning-company-f9b3e-default-rtdb.europe-west1.firebasedatabase.app/testimonial.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedData = [];
      for (const key in responseData) {
        let opinionTranslated;
        switch (selectedLanguage) {
          case "DE":
            opinionTranslated = responseData[key]["opinion-de"];
            break;
          case "GB":
            opinionTranslated = responseData[key].opinion;
            break;
          case "RO":
            opinionTranslated = responseData[key]["opinion-ro"];
            break;
          default:
            opinionTranslated = responseData[key]["opinion-de"];
        }

        loadedData.push({
          id: key,
          name: responseData[key].name,
          opinion: opinionTranslated,
          profile_picture: responseData[key]["profile-picture"],
        });
      }

      setOpinionsFromClients(loadedData);
      setIsLoading(false);
    };

    fetchData()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, [selectedLanguage]);

  if (isLoading) {
    return (
      <section style={{ textAlign: "center" }}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section style={{ textAlign: "center", color: "red" }}>
        <h4>{httpError}</h4>
      </section>
    );
  }

  const opinions = opinionsFromClients.map((opinion) => (
    <TestimonialDetails
      onDragStart={handleDragStart}
      src={opinion.profile_picture}
      opinion={opinion.opinion}
      clientName={opinion.name}
      role="presentation"
    />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={opinions}
      infinite={true}
      keyboardNavigation={true}
      responsive={responsive}
      controlsStrategy="responsive"
    />
  );
}
