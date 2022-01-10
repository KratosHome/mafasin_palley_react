import React, { useEffect, useState } from "react";
import PostServer from "../../../API/PostServer";
import TestinoiaksItem from "../../../components/TestinoiaksItem/TestinoiaksItem";
import "./TestinoiaksHome.css";

const TestinoiaksHome = () => {
  const [getTestinoiaksHome, setGetTestinoiaksHome] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getTestinoiaksHome = await PostServer.TestinoiaksHome();
    setGetTestinoiaksHome(getTestinoiaksHome);
  }

  console.log(getTestinoiaksHome);
  return (
    <div className="TestinoiaksHomeContainer">
      <div className="TestinoiaksHomeImeage">
        {getTestinoiaksHome.map((reviews) => (
          <TestinoiaksItem key={reviews.name} reviews={reviews} />
        ))}
      </div>
    </div>
  );
};
export default TestinoiaksHome;
