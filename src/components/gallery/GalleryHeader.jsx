import React from "react";
import HeroLayout from "../layout/HeroLayout";

function GalleryHeader() {
  return (
    <HeroLayout
      label="Selected Works"
      title={
        <>
          Client Portrait <span className="text-primary italic">Gallery</span>
        </>
      }
      description={
        <p>
          Discover a curated gallery of our finest handmade portraits, capturing
          moments and memories for clients around the world.{" "}
        </p>
      }
      centered={true}
    />
  );
}

export default GalleryHeader;
