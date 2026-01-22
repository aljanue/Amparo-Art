import React from "react";
import { Link } from "react-router-dom";

function StartOrder() {
  return (
    <div className="md:px-12 px-6 py-6 w-full">
      <div className="flex flex-col gap-6 md:px-24 sm:px-12 px-6 items-center justify-center text-center py-12 bg-primary/10 rounded-md border border-solid border-primary/20">
        <h1 className="font-serif text-3xl">
          Ready to commission a masterpiece?
        </h1>
        <p className="font-light max-w-175">
          Your memories deserve to be preserved in an elegant, handcrafted
          portrait.
        </p>
        <Link
          to="/order"
          className="shadow-lg shadow-primary/50 px-10 py-2 max-w-70 rounded-sm text-sm bg-primary uppercase font-light text-white cursor-pointer transition-all duration-300 border border-transparent hover:bg-white hover:text-primary hover:border-primary hover:shadow-md"
        >
          Start your order
        </Link>
      </div>
    </div>
  );
}

export default StartOrder;
