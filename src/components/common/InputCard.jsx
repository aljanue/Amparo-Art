import React from "react";

function InputCard({ title, description, icon, className }) {
  return (
    <div className={`p-4 flex flex-col gap-1 sm:justify-start  sm:text-start text-center justify-center relative border border-black/20 rounded-2xl cursor-pointer hover:shadow-sm hover:bg-background-light bg-white transition-all ease-in-out duration-300 ${className}`}>
      <div class="flex sm:flex-row flex-col-reverse gap-x-4 gap-y-1 items-center justify-between">
        <h1 class="text-xl font-serif">{title}</h1>
        <span class="material-symbols-outlined text-black/40">{icon}</span>
      </div>
      <p className="font-light text-sm">{description}</p>
    </div>
  );
}

export default InputCard;
