import React from "react";
import SmipeSlider from "./SimpleSlider/SmipeSlider";
import HomeProductMain from "./HomeProductMein/HomeProductMain";
import BanerMain from "./BanerMain/BanerMain";
import HotDell from "../../components/HotDell/HotDell";
import TestinoiaksHome from "./TestinoiaksHome /TestinoiaksHome";
import Instagrame from "./Instagrame/Instagrame";
import TestinoiaksSlider from "../../components/TestinoiaksSlider/TestinoiaksSlider";
import TestinoiaksItem from "../../components/TestinoiaksItem/TestinoiaksItem";
import TestSlider from "./testSlider/TestSlide";

const Main = () => {
  return (
    <>
      <SmipeSlider />
      <HomeProductMain />
      <BanerMain />
      <HotDell />
      <TestinoiaksHome />
      <Instagrame />
      <TestSlider />
    </>
  );
};
export default Main;
