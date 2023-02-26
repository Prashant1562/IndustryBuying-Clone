import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/styles.css";
import img1 from "../assets/image/img1.png"
import img2 from "../assets/image/img2.png"
import img3 from "../assets/image/img3.png"
import img4 from "../assets/image/img4.png"

export default function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="App">

      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          <div>
            <img src={img1} />
          </div>
          <div>
          <img src={img2} />
          </div>
          <div>
          <img src={img3} />
          </div>
          <div>
          <img src={img4} />
          </div>
          <div>
          <img src={img1} />
          </div>
         
        </Carousel>
      </div>
    </div>
  );
}