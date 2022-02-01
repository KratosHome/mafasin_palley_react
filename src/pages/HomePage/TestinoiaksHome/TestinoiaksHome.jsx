import React, { useEffect, useState } from "react";
import PostServer from "../../../API/PostServer";
import TestinoiaksItem from "./../TestinoiaksItem/TestinoiaksItem";
import "./TestinoiaksHome.css";
import Carousel from "nuka-carousel";

const TestinoiaksHome = () => {
  const [getTestinoiaksHome, setGetTestinoiaksHome] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getTestinoiaksHome = await PostServer.TestinoiaksHome();
    setGetTestinoiaksHome(getTestinoiaksHome);
  }
  return (
    <div className="TestinoiaksHomeContainer">
      <div className="TestinoiaksHomeImeage">
        <h3 className="TestinoiaksHomeH3">TESTIMONIALS</h3>
        <div className="caruselHeigth">
          <Carousel
            enableKeyboardControls={true}
            pauseOnHover={false}
            swiping={true}
            cellAlign="center"
            dragging={true}
          >
            {getTestinoiaksHome.map((reviews) => (
              <TestinoiaksItem key={reviews.name} reviews={reviews} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default TestinoiaksHome;
