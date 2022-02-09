import React, { useEffect } from "react";
import SmipeSlider from "./SimpleSlider/SmipeSlider";
import HomeProductMain from "./HomeProductMein/HomeProductMain";
import BanerMain from "./BanerMain/BanerMain";
import TestinoiaksHome from "./TestinoiaksHome/TestinoiaksHome";
import Instagrame from "./Instagrame/Instagrame";
import HotDell from "./HotDell/HotDell";
import MayBaner from "../../components/MayBaner/MayBaner";

const Main = () => {
  useEffect(() => {
    document.title = "Palley";
  }, []);

  useEffect(() => {
    document.head.getElementsByTagName("link")[0].href =
      " http://localhost:3000/favicon.ico";
  }, []);

  return (
    <>
      <MayBaner />
      <SmipeSlider />
      <HomeProductMain />
      <BanerMain />
      <HotDell />
      <TestinoiaksHome />
      <Instagrame />
    </>
  );
};
export default Main;
