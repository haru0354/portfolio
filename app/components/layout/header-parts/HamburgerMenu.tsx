"use client";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import AnimatedItem from "../../ui/AnimatedItem";
import Button from "../../ui/Button";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <div className="block sm:hidden">
      {isOpen ? (
        <AnimatedItem
          elementType="div"
          animation="fadeInRight"
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50"
        >
          <div className="flex flex-col w-48 h-full ml-auto rounded-l-2xl  bg-white">
            <HeaderMenu ulClass="pt-20" liClass="text-lg font-semibold" />
            <Button
              type="button"
              color="white"
              onClick={closeMenu}
              className="mt-auto mb-10 mx-6"
            >
              ← Close
            </Button>
          </div>
        </AnimatedItem>
      ) : (
        <button
          onClick={openMenu}
          type="button"
          className="flex flex-col items-center justify-center border mr-4 px-2 pt-2 pb-1 border-gray-300 rounded"
        >
          <span className="block w-6 h-0.5 bg-gray-500 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-500 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-500"></span>
          <p className="text-xs mt-1 mb-0 text-gray-500">MENU</p>
        </button>
      )}
    </div>
  );
};

export default HamburgerMenu;
