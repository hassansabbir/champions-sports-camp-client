import image1 from "../../../assets/adventure-park.jpg";
import image2 from "../../../assets/baseball.jpg";
import image3 from "../../../assets/running.jpg";
import image4 from "../../../assets/tennis-racket-balls.jpg";
import image5 from "../../../assets/swimming-pool.jpg";
import image6 from "../../../assets/match-football.jpg";
import image7 from "../../../assets/jumping-rope.jpg";
import image8 from "../../../assets/swiming.jpg";
import image9 from "../../../assets/football.jpg";

const PhotoGallery = () => {
  return (
    <div>
      <h2 className="text-5xl font-display text-center mt-20">Photo Gallery</h2>
      <h3 className="text-3xl text-center font-semibold my-5">
        Some of our camp photos{" "}
      </h3>
      <div className="grid grid-cols-3 my-20 gap-5 ">
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image1}
          alt=""
        />
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image2}
          alt=""
        />
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image3}
          alt=""
        />
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image4}
          alt=""
        />
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image5}
          alt=""
        />
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image6}
          alt=""
        />
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image7}
          alt=""
        />
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image8}
          alt=""
        />
        <img
          className="rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={image9}
          alt=""
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
