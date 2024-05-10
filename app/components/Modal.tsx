"use client";

import { useState } from "react";
import AnimatedItem from "./lib/AnimatedItem";

type ModalProps = {
  src: string;
  alt: string;
  title: string;
};

const Modal: React.FC<ModalProps> = ({ src, alt, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div>
      <AnimatedItem
        elementType="div"
        animation="fadeInRotate"
        className="text-center p-1 max-w-[520px] relative hover:border-blue-700"
        onClick={toggleModal}
      >
        <img
          src={src}
          width={450}
          height={450}
          alt={alt}
          className="m-auto block rounded-lg border-2 hover:border-blue-700"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          {title}
        </div>
      </AnimatedItem>
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed flex inset-0 items-center justify-center w-full h-full bg-gray-500 bg-opacity-60 z-20"
        >
          <div className="w-[85%] h-[85%] bg-gray-100 border rounded">
            <img src="/merlion.jpg" alt="a" width={300} height={250} />
            <p>{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
