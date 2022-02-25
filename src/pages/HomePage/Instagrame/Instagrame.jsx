import React, { useEffect, useLayoutEffect, useState } from "react";
import PostServer from "../../../API/PostServer";
import InstagramItem from "../../../components/InstagramItem/InstagramItem";
import "./Instagrame.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import WOW from "wow.js"

const Instagrame = () => {
  const [getInstagrame, setGetInstagram] = useState([]);

  useEffect(() => {
    fetchInstagrame();
  }, []);

  async function fetchInstagrame() {
    const getInstagrame = await PostServer.Instagram();
    setGetInstagram(getInstagrame);
  }

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();

  let responsive = {};

  function counInstagramSlider() {
    responsive = {
      0: { items: 1 },
      1: { items: 2 },
      2: { items: 3 },
      3: { items: 4 },
      4: { items: 5 },
      5: { items: 6 },
    };

    if (+width <= 730) {
      responsive = {
        0: { items: 1 },
      };
    } else if (+width <= 1025) {
      responsive = {
        0: { items: 1 },
        1: { items: 2 },
      };
    } else if (+width <= 1571) {
      responsive = {
        0: { items: 1 },
        1: { items: 2 },
        2: { items: 3 },
      };
    } else if (+width <= 2025) {
      responsive = {
        0: { items: 1 },
        1: { items: 2 },
        2: { items: 3 },
        3: { items: 4 },
      };
    } else if (+width <= 3020) {
      responsive = {
        0: { items: 1 },
        1: { items: 2 },
        2: { items: 3 },
        3: { items: 4 },
        4: { items: 5 },
      };
    }
    return responsive;
  }

  function paddigSlider() {
    let paddigSlider;
    if (+width < 760) {
      paddigSlider = 0;
    } else {
      paddigSlider = 70;
    }
    return paddigSlider;
  }

  new WOW().init()

  return (
    <div className="InstagramePage wow animate__animated animate__backInDown">
      <h3>#INSTAGRAM</h3>
      <div>
        <AliceCarousel
          responsive={counInstagramSlider()}
          controlsStrategy="alternate"
          autoPlay={true}
          autoPlayInterval={3000}
          infinite={true}
          keyboardNavigation={true}
          mouseTracking={true}
          disableButtonsControls={true}
          disableDotsControls={true}
          paddingLeft={paddigSlider()}
          paddingRight={paddigSlider()}
        >
          {getInstagrame.map((inst) => (
            <InstagramItem key={inst.id} inst={inst} />
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default Instagrame;
