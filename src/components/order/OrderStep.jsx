import React from "react";

function OrderStep({ title, description, number, children }) {
  return (
    <div className="flex flex-col relative ps-8 border-l border-solid border-black/20 gap-4 pb-2">
      <div className="absolute bg-white rounded-full w-8 h-8 flex items-center justify-center bottom-[calc(100%-1rem)] right-[calc(100%-1rem)] text-primary border border-solid border-black/20">
        {number}
      </div>
      <h1 className="font-serif text-3xl">{title}</h1>
      <p className="font-light pb-4">{description}</p>
      <div class="flex gap-x-8 gap-y-6 flex-wrap w-full">
        {children}
      </div>
    </div>
  );
}

export default OrderStep;
