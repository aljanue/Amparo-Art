import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full border-t border-gray-300 pt-12 pb-4 px-16">
      <div className="flex gap-8 w-full flex-wrap">
        <div className="flex flex-col flex- gap-4 flex-1">
          <h1 className="font-serif font-black italic text-xl text-nowrap">Amparo Art.</h1>
          <p className="font-light max-w-100 min-w-[30vw]">
            Handmade charcoal and oil portraits created with passion and
            precision. Preserving your most cherished memories for generations
            to come.
          </p>
        </div>
        <div className="flex flex-1 justify-around flex-wrap gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <h4 className="text-primary text-sm uppercase">Explore</h4>
            <ul className="flex flex-col gap-4 font-light text-sm">
              <li>
                <Link to="/" className="cursor-pointer hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="cursor-pointer hover:underline">
                  About me
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="cursor-pointer hover:underline">
                  Work done
                </Link>
              </li>
              <li>
                <Link to="/order" className="cursor-pointer hover:underline">
                  Place order
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h4 className="text-primary text-sm uppercase">Connect</h4>
            <ul className="flex flex-col gap-4 font-light text-sm">
              <li className="cursor-pointer hover:underline">Instagram</li>
              <li className="cursor-pointer hover:underline">Pinterest</li>
              <li className="cursor-pointer hover:underline">Email me</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm font-light border-t border-gray-300 pt-4 mt-8 px-2">
        © 2026 Amparo Art. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
