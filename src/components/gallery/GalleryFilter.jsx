import React from "react";

const Filter = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer font-light px-4 py-2 border border-gray-300 rounded-full transition-all ease-in-out duration-300 hover:shadow-md ${
        active ? "bg-black text-white hover:bg-gray-800" : "hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
};
function GalleryFilter({ activeCategory, setActiveCategory }) {
  const categories = [
    "All Works",
    "Oil Painting",
    "Charcoal",
    "Watercolor",
    "Pencil Sketch",
  ];

  return (
    <div className="px-12 w-full">
      <ul className="w-full px-8 pb-8 border-b border-gray-300 flex justify-center gap-4 flex-wrap">
        {categories.map((category) => (
          <li key={category}>
            <Filter
              label={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GalleryFilter;
