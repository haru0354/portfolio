"use client";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import AnimatedItem from "../lib/AnimatedItem";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggleOpen();
    }
  };

  return (
    <div className="block sm:hidden">
      <button onClick={toggleOpen} className="flex flex-col items-center justify-center border mr-4 px-2 pt-2 pb-1 border-gray-300 rounded">
        <span className="block w-6 h-0.5 bg-gray-500 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-500 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-500"></span>
        <p className="text-xs mt-1 text-gray-500">menu</p>
      </button>
      {isOpen && (
        <AnimatedItem
          elementType="div"
          animation="fadeInRight"
          onClick={closeModal}
          className="h-screen w-screen fixed inset-0 opacity-70"
        >
          <div className="w-[200px] h-screen ml-auto bg-white border-l">
            <HeaderMenu liClass="my-8" ulClass="p-4" />
          </div>
        </AnimatedItem>
      )}
    </div>
  );
};

export default HamburgerMenu;
