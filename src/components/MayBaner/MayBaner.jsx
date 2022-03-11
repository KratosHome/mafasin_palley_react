import React, { useEffect, useState } from "react";
import "./MayBaner.css";
import dataSlider from "./dataSlider";
import Btnbaner from "./BTNBaner/BTNBaner";
import SliderTite from "./../SliderTatel/SliderTitel"
import { CSSTransition } from "react-transition-group";

const MayBaner = () => {
  const [slideIndex, setSlideInsex] = useState(1);
  const [isRining, setIsrining] = useState(true)

  const nexSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideInsex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideInsex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideInsex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideInsex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideInsex(index);
  };


  useEffect(() => {
    if (isRining) {
    const chengBaner =  setTimeout(() => {
        if (slideIndex !== dataSlider.length) {
          setSlideInsex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
          setSlideInsex(1);
        } 
      }, 2500)
      return() =>{
        clearTimeout(chengBaner)
      }
    } 
  }, [slideIndex, isRining])



  return (
    <>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <CSSTransition in={obj.title.length > 1} classNames="alert" timeout={300} unmountOnExit >
                <SliderTite title={obj.title} from={obj.from} />
              </CSSTransition>
              <img
                src={
                  process.env.PUBLIC_URL + `/img/baner/baner/img${index + 1}.jpg`
                }
                alt="f"
              />
            </div>
          );
        })}
        <Btnbaner moveSlide={nexSlide} direction={"next"} setIsrining={setIsrining} isRining={isRining} />
        <Btnbaner moveSlide={prevSlide} direction={"prev"} setIsrining={setIsrining} isRining={isRining} />
        <div className="container-dots">
          {Array.from({ length: dataSlider.length }).map((item, index) => (
            <div
             key={index}
              onClick={isRining === true ? () => setIsrining(false) : () => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            >
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MayBaner;
