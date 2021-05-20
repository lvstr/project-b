import React from "react";

import Logo from "../assets/images/hero/header.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Hero() {
  return (
    <section className="mx-auto">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        swipeable={true}
        showArrows={false}
        interval={2000}
      >
        <div className="bg-indigo-900 w-100 h-80">
          <img
            src={Logo}
            alt=""
            className=" lg:inline-block lg:h-60 w-full overflow-hidden object-cover"
          />
        </div>
        <div className="bg-indigo-900 w-100 h-80">
          <img
            src={Logo}
            alt=""
            className=" lg:inline-block lg:h-60 w-full overflow-hidden object-cover"
          />
        </div>
        <div className="bg-indigo-900 w-100 h-80">
          <img
            src={Logo}
            alt=""
            className=" lg:inline-block lg:h-60 w-full overflow-hidden object-cover"
          />
        </div>
      </Carousel>
    </section>
  );
}
