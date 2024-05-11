"use client";

import { useState } from "react";
import AnimatedItem from "./lib/AnimatedItem";
import CloseButton from "./ui/CloseButton";

type ModalProps = {
  src: string;
  alt: string;
  title: string;
  overview: string;
  technology: string;
  reasonForCreation: string;
  commitment: string;
};

const Modal: React.FC<ModalProps> = ({
  src,
  alt,
  title,
  overview,
  technology,
  reasonForCreation,
  commitment,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden"; // 背景を固定
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeModal = (e: React.MouseEvent) => {
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
            <div className="flex justify-between mb-4">
              <h3 className="text-lg text-white font-semibold px-4 py-2 bg-gray-700 rounded">
                {title}
              </h3>
              <CloseButton onClick={closeModal} />
            </div>
            <div className="mx-10">
              <img src="/merlion.jpg" alt="a" width={300} height={250} className="mb-4"/>
              {overview}
              <h4 className="text-lg pl-4 mt-8 mb-4 border-b-2 border-dashed border-gray-700">
                使用技術
              </h4>
              {technology}
              <h4 className="text-lg pl-4 mt-8 mb-4 border-b-2 border-dashed border-gray-700">
                作成理由
              </h4>
              {reasonForCreation}
              <h4 className="text-lg pl-4 mt-8 mb-4 border-b-2 border-dashed border-gray-700">
                こだわりの点
              </h4>
              {commitment}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
