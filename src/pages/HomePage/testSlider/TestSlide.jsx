import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const TestSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel showArrows={true}>
        <p className="fvas">bla1</p>
        <p className="fvas"> bla2</p>
        <div className="fvas">bla3</div>
      </Carousel>
    </>
  );
};
export default TestSlider;
