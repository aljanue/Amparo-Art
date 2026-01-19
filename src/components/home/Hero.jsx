import React from "react";
import horizontal from "../../assets/images/horizontal.jpg";
import { Link } from "react-router-dom";
import HeroLayout from "../layout/HeroLayout";

function Hero() {
  return (
    <HeroLayout
    centerOnMobile={true}
      label="Timeless Artistry"
      title={
        <>
          Turn Your <span className="text-primary italic">Memories</span> into
          Art
        </>
      }
      description={
        <>
          Exquisite handmade portraits drawn from your favorite photos. We
          capture personality and emotion through the elegance of traditional
          mediums.
        </>
      }
      actions={
        <>
          <button className="cursor-pointer text-white bg-black font-light border border-black rounded-sm px-8 py-3 transition-all ease-in-out duration-300 hover:bg-white hover:text-black hover:shadow-lg ">
            <Link to="/order">Order a portrait</Link>
          </button>
          <Link to="/gallery" className="cursor-pointer font-light sm:py-3 py-0 px-8  transition-all ease-in-out duration-300 hover:underline underline-offset-8">View portfolio gallery</Link>
        </>
      }
      imageSrc={horizontal}
      imageAlt="horizontal example"
      gradientBg={true}
    />);
}

export default Hero;
