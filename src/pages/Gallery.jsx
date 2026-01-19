import React, { useState } from "react";
import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryFilter from "../components/gallery/GalleryFilter";
import GalleryItems from "../components/gallery/GalleryItems";
import StartOrder from "../components/gallery/StartOrder";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Works");

  return (
    <>
      <GalleryHeader />
      <GalleryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <GalleryItems key={activeCategory} activeCategory={activeCategory} />
      <StartOrder />
    </>
  );
}

export default Gallery;
