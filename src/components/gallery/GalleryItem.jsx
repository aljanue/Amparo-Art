import React from "react";

const GalleryItem = ({ imageSrc, imageAlt }) => {
  return (
    <div className="w-full h-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full aspect-3/4 h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
      />
    </div>
  );
};

export default GalleryItem;
