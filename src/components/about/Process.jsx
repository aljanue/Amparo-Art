import React from "react";
import vertical from "../../assets/images/horizontal.jpg";

const imageContainer = (img, alt="", margin=false) => (
  <div className={`aspect-3/4 flex-1 ${margin ? "sm:mt-8" : ""} overflow-hidden transition-all ease-in-out duration-500 shadow-xl hover:shadow-2xl`}>
    <img
      className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.05] ease-in-out"
      src={img}
      alt={alt}
    ></img>
  </div>
);

function Process() {
  return (
    <div className="md:p-16 px-8 py-12 w-full bg-background-light">
      <div className="flex gap-x-8 gap-y-4 w-full flex-wrap items-end sm:justify-between justify-end border-b border-gray-300 pb-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-primary uppercase">Process</span>
          <h1 className="font-serif text-4xl">Inside the Studio</h1>
        </div>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="sm:my-4 text-gray-400 cursor-pointer hover:underline underline-offset-4 text-xs tracking-widest uppercase font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out w-fit">
          Follow on instagram <span className="">→</span>
        </a>
      </div>
      <div className="flex sm:mt-0 mt-6 sm:flex-row flex-col md:gap-8 gap-0 flex-wrap sm:items-start items-center">
          {imageContainer(vertical, "vertical example", true)}
          {imageContainer(vertical, "vertical example")}
          {imageContainer(vertical, "vertical example", true)}
      </div>
    </div>
  );
}

export default Process;
