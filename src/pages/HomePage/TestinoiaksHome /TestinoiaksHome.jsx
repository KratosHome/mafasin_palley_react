import React, { useEffect, useState } from "react";
import PostServer from "../../../API/PostServer";
import TestinoiaksItem from "../../../components/TestinoiaksItem/TestinoiaksItem";
import "./TestinoiaksHome.css";
import { Carousel } from "react-responsive-carousel";

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
        <h3>TESTIMONIALS</h3>
        <Carousel>
          {getTestinoiaksHome.map((reviews) => (
            <TestinoiaksItem key={reviews.name} reviews={reviews} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default TestinoiaksHome;
