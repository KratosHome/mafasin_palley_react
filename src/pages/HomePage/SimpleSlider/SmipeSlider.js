import React, {Component} from "react";
import Slider from "react-slick";
import slider1 from "../../../img/baner/slide2.1.jpg";
import slider2 from "../../../img/baner/slide1.1.jpg";
import slider3 from "../../../img/baner/slide-3.jpeg";
import SliderTitel from "../../../components/SliderTatel/SliderTitel";
import "./SwaipSlider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 2000,
      fade: true,
      pauseOnHover: false,
    };
    return (
        <div className="SwipeSliderHeader">
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Slider {...settings}>
                <img className="SwaipSlider" src={slider1} alt="slider1"/>
                <img className="SwaipSlider" src={slider2} alt="slider2"/>
                <img className="SwaipSlider" src={slider3} alt="slider3"/>
            </Slider>
            <SliderTitel/>
        </div>
    );
  }
}
