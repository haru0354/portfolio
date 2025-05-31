"use client";

import { useState } from "react";
import Image from "next/image";

import AnimatedItem from "./AnimatedItem";
import CloseButton from "./CloseButton";
import Button from "./Button";
import ImageSlider from "./ImageSlider";

type ModalProps = {
  modalType: "image" | "button";
  src: string;
  alt: string;
  title: string;
  items: Items[];
  overview: string;
  technology: string;
  partOfThePackage: string;
  reasonForCreation: string;
  commitment: string;
  githubURL: string;
  appURL?: string;
};

type Items = {
  image: string;
  text: string;
};

const Modal: React.FC<ModalProps> = ({
  src,
  alt,
  title,
  items,
  overview,
  technology,
  partOfThePackage,
  reasonForCreation,
  commitment,
  modalType,
  githubURL,
  appURL,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
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
    <>
      {modalType === "image" && (
        <AnimatedItem
          elementType="div"
          animation="fadeInRotate"
          className="relative max-w-[520px] p-1 m-1 text-center rounded-lg cursor-pointer"
          onClick={toggleModal}
        >
          <Image
            src={src}
            width={460}
            height={330}
            alt={alt}
            className="block mx-auto border rounded-lg shadow-lg border-gray-300"
          />
          <p className="mt-4 font-semibold text-sky-600">{title}</p>
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold rounded-lg opacity-0 border-2 transition duration-300 hover:bg-gray-500 hover:border-blue-500 hover:opacity-90">
            <p className="p-8 border rounded border-white bg-white">
              {title}の詳細へ
            </p>
          </div>
        </AnimatedItem>
      )}
      {modalType === "button" && (
        <Button onClick={toggleModal} type="button">
          詳細はコチラ
        </Button>
      )}
      {isModalOpen && (
        <AnimatedItem
          elementType="div"
          animation="fadeInOpacity"
          onClick={closeModal}
          className="fixed flex inset-0 items-center justify-center w-full h-full z-20 bg-gray-500 bg-opacity-60 "
        >
          <div className="max-w-[90%] sm:w-[800px] h-[85%] pb-20 border rounded bg-gray-100 overflow-y-auto">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold px-4 py-2 rounded text-white bg-gray-700">
                {title}
              </h3>
              <CloseButton onClick={closeModal} />
            </div>
            <div className="mx-10">
              <ImageSlider items={items} />
              <p className="mt-6">{overview}</p>
              <ul>
                <li>
                  GitHub:
                  <a
                    href={`${githubURL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600"
                  >
                    {githubURL}
                  </a>
                </li>
                {appURL && (
                  <li>
                    URL:
                    <a
                      href={`${appURL}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600"
                    >
                      {appURL}
                    </a>
                  </li>
                )}
              </ul>
              <h4 className="pl-4 mt-8 mb-4 text-lg border-b-2 border-dashed border-gray-700">
                使用技術
              </h4>
              <p className="break-words whitespace-pre-wrap">{technology}</p>
              <h4 className="pl-4 mt-8 mb-4 text-lg border-b-2 border-dashed border-gray-700">
                使用パッケージの一部
              </h4>
              <p className="break-words whitespace-pre-wrap">
                {partOfThePackage}
              </p>
              <h4 className="pl-4 mt-8 mb-4 text-lg border-b-2 border-dashed border-gray-700">
                作成したきっかけ
              </h4>
              {reasonForCreation}
              <h4 className="pl-4 mt-8 mb-4 text-lg border-b-2 border-dashed border-gray-700">
                作成をしてみて
              </h4>
              {commitment}
            </div>
          </div>
        </AnimatedItem>
      )}
    </>
  );
};

export default Modal;
