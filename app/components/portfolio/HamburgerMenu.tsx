"use client";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import AnimatedItem from "../lib/AnimatedItem";
import CloseButton from "../ui/CloseButton";

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
      <button onClick={toggleOpen} className="border mr-4 px-2 border-gray-600">
        open
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
