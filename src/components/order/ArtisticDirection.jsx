import React from "react";
import InputCard from "../common/InputCard";
import InputLabel from "../common/InputLabel";

function ArtisticDirection() {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <p className="text-sm uppercase">Preferred Medium</p>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <InputCard
            className="flex-1"
            title="Oil Painting"
            description="Rich and textured oil paintings."
            icon="palette"
          />
          <InputCard
            className="flex-1"
            title="Watercolor"
            description="Soft and fluid watercolor art."
            icon="water_drop"
          />
          <InputCard
            className="flex-1"
            title="Digital Art"
            description="Modern and versatile digital creations."
            icon="computer"
          />
          <InputCard
            className="flex-1"
            title="Acrylic"
            description="Vibrant and fast-drying acrylic paintings."
            icon="brush"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <p className="text-sm uppercase">Approximate Size</p>
        <div className="flex gap-4 flex-wrap">
          <InputLabel label='Small (8" x 10")' />
          <InputLabel label='Medium (16" x 20")' />
          <InputLabel label='Large (24" x 36")' />
          <InputLabel label='Extra Large (36" x 48")' />
        </div>
      </div>
    </>
  );
}

export default ArtisticDirection;
