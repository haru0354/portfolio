"use client";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import AnimatedItem from "../../ui/AnimatedItem";

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
      {isOpen ? (
        <>
          <AnimatedItem
            elementType="div"
            animation="fadeInRight"
            onClick={closeModal}
            className="h-screen w-screen fixed inset-0 opacity-70"
          >
            <div className="w-[180px] h-screen ml-auto border-l shadow-xl border-gray-300 bg-gray-200 ">
              <HeaderMenu ulClass="pt-20" />
              <button
                type="button"
                onClick={toggleOpen}
                className=" mt-14 border-b-2 border-gray-500 hover:bg-gray-500 hover:text-white"
              >
                ← 閉じる
              </button>
            </div>
          </AnimatedItem>
        </>
      ) : (
        <button
          onClick={toggleOpen}
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
