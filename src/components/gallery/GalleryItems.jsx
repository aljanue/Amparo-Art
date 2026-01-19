import React from "react";
import verticalImage from "../../assets/images/vertical.jpg";
import horizontalImage from "../../assets/images/horizontal.jpg";
import GalleryItem from "./GalleryItem";
import GalleryPagination from "./GalleryPagination";
import { useGallery } from "./useGallery";

const baseGalleryData = [
  {
    imageSrc: verticalImage,
    imageAlt: "Gallery item 1",
    category: "Oil Painting",
  },
  {
    imageSrc: horizontalImage,
    imageAlt: "Gallery item 2",
    category: "Charcoal",
  },
  {
    imageSrc: horizontalImage,
    imageAlt: "Gallery item 3",
    category: "Watercolor",
  },
  {
    imageSrc: verticalImage,
    imageAlt: "Gallery item 4",
    category: "Pencil Sketch",
  },
  {
    imageSrc: verticalImage,
    imageAlt: "Gallery item 5",
    category: "Oil Painting",
  },
  {
    imageSrc: verticalImage,
    imageAlt: "Gallery item 6",
    category: "Charcoal",
  },
  {
    imageSrc: horizontalImage,
    imageAlt: "Gallery item 7",
    category: "Watercolor",
  },
  {
    imageSrc: horizontalImage,
    imageAlt: "Gallery item 8",
    category: "Pencil Sketch",
  },
];

// Duplicate data to simulate many pages
const galleryData = [
  ...baseGalleryData,
  ...baseGalleryData,
  ...baseGalleryData,
  ...baseGalleryData,
  ...baseGalleryData,
].map((item, index) => ({
  ...item,
  imageAlt: `${item.imageAlt} - ${index + 1}`,
}));

function GalleryItems({ activeCategory }) {
  const {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
    windowWidth,
    hasItems,
  } = useGallery(galleryData, activeCategory);

  if (!hasItems) {
    return (
      <div className="px-12 py-20 w-full text-center">
        <p className="text-xl font-light text-gray-400">
          No artworks found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="px-12 py-6 w-full flex flex-col gap-8 mb-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 min-h-[50vh]">
        {currentItems.map((item, index) => (
          <GalleryItem
            key={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>

      <GalleryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        windowWidth={windowWidth}
      />
    </div>
  );
}

export default GalleryItems;
