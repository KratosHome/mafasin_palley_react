import React from "react";
import HomeProductMain from "./HomeProductMein/HomeProductMain";
import BanerMain from "./BanerMain/BanerMain";
import TestinoiaksHome from "./TestinoiaksHome/TestinoiaksHome";
import Instagrame from "./Instagrame/Instagrame";
import HotDell from "./HotDell/HotDell";
import MayBaner from "../../components/MayBaner/MayBaner";
import { useTitle } from "../../hooks/useTitle";


const Main = () => {
  useTitle("Home Page");
  return (
    <>
      <MayBaner />
      <HomeProductMain />
      <BanerMain />
      <HotDell />
      <TestinoiaksHome />
      <Instagrame />
    </>
  );
};
export default Main;
