import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="ps-6 pe-8 py-4 w-full flex justify-between items-center text-primary bg-accent gap-4 border-b border-gray-300 relative z-50">
        <h1 className="text-xl font-serif font-black italic tracking-wide text-black">
          Amparo Art.
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-sans uppercase text-sm">
          <ul className="flex gap-8">
            <li className="text-black font-light cursor-pointer hover:underline">HOME</li>
            <li className="text-black font-light cursor-pointer hover:underline">ABOUT ME</li>
            <li className="text-black font-light cursor-pointer hover:underline">WORK DONE</li>
            <li className="text-black font-light cursor-pointer hover:underline">PROCESS</li>
          </ul>
          <button className="cursor-pointer text-primary font-light text-sm border border-primary rounded-3xl px-4 py-2 hover:bg-primary hover:text-white transition-all ease-in-out duration-300 hover:shadow">
            PLACE ORDER
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden cursor-pointer text-primary z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-accent z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible bg-white" : "opacity-0 invisible pointer-events-none bg-transparent"
        }`}
      >
        <ul className="flex flex-col gap-8 items-center font-sans uppercase text-lg">
          <li 
            className="text-black font-light cursor-pointer hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </li>
          <li 
            className="text-black font-light cursor-pointer hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT ME
          </li>
          <li 
            className="text-black font-light cursor-pointer hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            WORK DONE
          </li>
        </ul>
        <button className="cursor-pointer text-primary font-light text-lg border border-primary rounded-3xl px-8 py-3 hover:bg-primary hover:text-white transition-all ease-in-out duration-300 hover:shadow">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Header;
