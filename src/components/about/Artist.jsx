import React from "react";
import vertical from "../../assets/images/vertical.jpg";
import { Link } from "react-router-dom";
import HeroLayout from "../layout/HeroLayout";

export function Artist() {
  return (
    <HeroLayout
      label="About the artist"
      imageSrc={vertical}
      imageAlt="Artist portrait"
      horizontal={false}
      gradientBg={false}
      title={
        <>
          Capturing Stories {" "}
          <span className="text-primary italic">in Every Stroke</span>
        </>
      }
      description={
        <p>
          I believe in the quiet power of a handmade portrait to preserve
          memories that digital prints simply cannot. Welcome to my studio,
          where every canvas tells a story of love, legacy, and life.
        </p>
      }
      actions={
          
            <Link to="/gallery" className="cursor-pointer font-light sm:py-3 pt-4 sm:px-8  transition-all ease-in-out duration-300 flex items-center gap-1 group hover:gap-4">
              <p className="group-hover:underline underline-offset-8">View Gallery</p>
              <span className="material-symbols-outlined font-extralight! text-md!">arrow_right_alt</span>
            </Link>
      }
    />
  );
}

export default Artist;
