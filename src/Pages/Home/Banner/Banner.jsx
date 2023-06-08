import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slider1 from "../../../assets/football.jpg";
import slider2 from "../../../assets/tennis.jpg";
import slider3 from "../../../assets/baseball.jpg";
import slider4 from "../../../assets/football2.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel className="text-center">
        <div>
          <img src={slider1} />
        </div>
        <div>
          <img src={slider2} />
        </div>
        <div>
          <img src={slider3} />
        </div>
        <div>
          <img src={slider4} />
        </div>
      </Carousel>
      <div className="md:absolute text-white top-1/4 right-56 bg-black bg-opacity-60 rounded py-10 w-8/12">
        <h3 className="text-4xl  font-display text-center">
          Experience the Thrill of Sports <br /> at Our Summer Camp!
        </h3>
        <p className="text-md text-center my-5 mx-auto w-9/12">
          Step into a world of excitement and personal growth at our Sports
          Academies Summer Camp. We invite young athletes to embark on an
          unforgettable journey, where they can develop their skills, build
          character, and forge lifelong friendships. Our camp is dedicated to
          embracing the spirit of sportsmanship while providing a dynamic
          curriculum that combines expert coaching, innovative teaching
          methodologies, and a range of engaging activities.
        </p>
      </div>
    </div>
  );
};

export default Banner;
