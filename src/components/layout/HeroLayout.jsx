import React from "react";
import horizontalImg from "../../assets/images/horizontal.jpg";

function HeroLayout({
  label,
  title,
  description,
  actions,
  imageSrc,
  imageAlt,
  horizontal = true,
  gradientBg = false,
  centerOnMobile = false,
  centered = false,
}) {
  return (
    <div
      className={`p-10 flex md:flex-row flex-col-reverse flex-wrap justify-between md:gap-8 gap-16 items-center ${gradientBg ? "bg-radial-elegant" : ""}`}
    >
      <div
        className={`flex flex-col ${centerOnMobile ? "items-center text-center" : ""} md:gap-4 gap-4 flex-1 lg:p-12 md:p-6 sm:p-4 p-0 ${centered ? "items-center text-center" : "md:items-start md:text-start"}`}
      >
        {label && (
          <span className="uppercase text-xs text-primary">{label}</span>
        )}
        <h2 className="text-5xl font-serif tracking-wide text-black  max-w-125">
          {title}
        </h2>
        <div className="font-light pt-4">{description}</div>
        {actions && (
          <div
            className={`flex flex-wrap gap-y-6 ${centerOnMobile ? "justify-center md:mt-4 mt-8" : "justify-start"} items-center`}
          >
            {actions}
          </div>
        )}
      </div>
      {imageSrc ? (
        <div className="flex-1 flex justify-center lg:justify-end sm:min-w-125 min-w-auto sm:p-12 p-0">
          <div
            className={`${horizontal ? "w-full" : "h-max lg:max-h-140 max-h-120"} md:rounded-md ${!horizontal ? "rounded-t-[80px]  rounded-b-md " : "rounded-md"} shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden`}
            style={{ aspectRatio: horizontal ? "4/3" : "3/4" }}
          >
            <img
              src={imageSrc || horizontalImg}
              alt={imageAlt || "horizontal example"}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HeroLayout;
