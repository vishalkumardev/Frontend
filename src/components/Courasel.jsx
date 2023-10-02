import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Courasel() {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      stopOnHover={true}
      showStatus={false}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <ion-icon name="chevron-back-circle-outline" size="large"></ion-icon>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <ion-icon name="chevron-forward-circle-outline" size="large"></ion-icon>   
          </div>
        );
      }}
    >
      <div>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/Lunar-Space-Plus_WEB_1440x.jpg?v=1695364961"
          alt=""
          className="w-full"
        />
      </div>
      <div>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/Wave_Genesis_WEB_1440x.jpg?v=1695297762"
          alt=""
          className="w-full"
        />
      </div>
      <div>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/454ANC_DESKTOP_1440x.jpg?v=1695144134"
          alt=""
          className="w-full"
        />
      </div>
      <div>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/Wave_Style_Call_WEB_1_1440x.jpg?v=1695129521"
          alt=""
          className="w-full"
        />
      </div>
    </Carousel>
  );
}

export default Courasel;
