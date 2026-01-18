import React from "react";
import exampleImage from "../../assets/images/example.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="p-10 flex md:flex-row flex-col-reverse flex-wrap justify-between gap-8 items-center bg-radial-elegant">
      <div className="flex flex-col gap-8 flex-1 lg:p-12 md:p-6 sm:p-4 p-0">
        <span className="uppercase text-xs text-primary">
          Timeless Artistry
        </span>
        <h2 className="text-5xl font-serif tracking-wide text-black">
          Turn Your <span className="text-primary italic">Memories</span> into
          Art
        </h2>
        <p className="font-light">
          Exquisite handmade portraits drawn from your favorite photos. We
          capture personality and emotion through the elegance of traditional
          mediums.
        </p>
        <div className="flex flex-wrap gap-y-6">
          <button className="cursor-pointer text-white bg-black font-light border border-black rounded-full px-8 py-3 transition-all ease-in-out duration-300 hover:bg-white hover:text-black hover:shadow-lg ">
            <Link to="/order">Order a portrait</Link>
          </button>
          <button className="cursor-pointer font-light sm:py-3 py-0 px-8  transition-all ease-in-out duration-300 hover:underline ">
            <Link to="/portfolio">View portfolio</Link>
          </button>
        </div>
      </div>
      <div className="flex-1 sm:min-w-125 min-w-auto sm:p-12 p-0">
        <img
          src={exampleImage}
          alt="example"
          className="w-full aspect-4/3 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
}

export default Hero;
