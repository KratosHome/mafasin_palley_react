import React, { useEffect, useLayoutEffect, useState } from "react";
import PostServer from "../../../API/PostServer";
import InstagramItem from "../../../components/InstagramItem/InstagramItem";
import "./Instagrame.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { MdElderly } from "react-icons/md";

const Instagrame = () => {
  const [getInstagrame, setGetInstagram] = useState([]);

  useEffect(() => {
    fetchInstagrame();
  }, []);

  async function fetchInstagrame() {
    const getInstagrame = await PostServer.Instagram();
    setGetInstagram(getInstagrame);
  }
  let responsive = {};

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

  function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return (
      <span>
        Window size: {width} x {height}
      </span>
    );
  }
  const bla = ShowWindowDimensions().props.children[1];

  function counInstagramSlider() {
    responsive = {
      0: { items: 1 },
      1: { items: 2 },
      2: { items: 3 },
      3: { items: 4 },
      4: { items: 5 },
      5: { items: 6 },
    };

    if (+bla <= 730) {
      responsive = {
        0: { items: 1 },
      };
    } else if (+bla <= 1025) {
      responsive = {
        0: { items: 1 },
        1: { items: 2 },
      };
    } else if (+bla <= 1571) {
      responsive = {
        0: { items: 1 },
        1: { items: 2 },
        2: { items: 3 },
      };
    } else if (+bla <= 2025) {
      responsive = {
        0: { items: 1 },
        1: { items: 2 },
        2: { items: 3 },
        3: { items: 4 },
      };
    } else if (+bla <= 3020) {
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
    if (+bla < 760) {
      paddigSlider = 0;
    } else {
      paddigSlider = 70;
    }
    return paddigSlider;
  }

  return (
    <div className="InstagramePage">
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
