import React, { useEffect, useState } from "react";
import PostServer from "../../../API/PostServer";
import InstagramItem from "../../../components/InstagramItem/InstagramItem";
import "./Instagrame.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Instagrame = () => {
  const [getInstagrame, setGetInstagram] = useState([]);

  useEffect(() => {
    fetchInstagrame();
  }, []);

  async function fetchInstagrame() {
    const getInstagrame = await PostServer.Instagram();
    setGetInstagram(getInstagrame);
  }
  const responsive = {
    0: { items: 1 },
    1: { items: 2 },
    2: { items: 3 },
  };
  return (
    <div className="InstagramePage">
      <h3>#INSTAGRAM</h3>
      <div>
        <AliceCarousel
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay={true}
          autoPlayInterval={2000}
          infinite={true}
          keyboardNavigation={true}
          mouseTracking={true}
          disableButtonsControls={true}
          disableDotsControls={true}
          items={4}
          paddingLeft={50}
          paddingRight={50}
          responsive={5}
        >
          {getInstagrame.map((inst) => (
            <InstagramItem inst={inst} />
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default Instagrame;
