import React from "react";

function Review() {
  return <div className="flex flex-col items-center py-12 px-16 gap-4"><span className="material-symbols-outlined text-4xl! text-primary/50" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
    <p className="font-serif text-xl font-extralight text-center">"The portrait Alexandra created of my late father is the most trasured possession in our home. She didn't just paint his face; she captured his kindness"</p>
    <div className="flex flex-col items-center gap-1 mt-2">
        <p>Sarah Jenkins</p>
        <p className="uppercase text-primary font-light text-xs">Verified Buyer</p>
    </div>
  </div>;
}

export default Review;
