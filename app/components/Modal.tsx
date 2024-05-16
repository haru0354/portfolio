"use client";

import { useState } from "react";
import AnimatedItem from "./lib/AnimatedItem";
import CloseButton from "./ui/CloseButton";
import Button from "./ui/Button";
import Image from "next/image";
import ImageSlider from "./portfolio/ImageSlider";

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
    <>
      {modalType === "image" && (
        <AnimatedItem
          elementType="div"
          animation="fadeInRotate"
          className="text-center p-1 m-1 max-w-[520px] relative rounded-lg cursor-pointer"
          onClick={toggleModal}
        >
          <Image
            src={src}
            width={460}
            height={330}
            alt={alt}
            className="mx-auto block border border-gray-300 rounded-lg shadow-lg"
          />
          <p className="mt-4  font-semibold text-sky-600">{title}</p>

          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold rounded-lg opacity-0 border-2 transition duration-8000 hover:bg-gray-500 hover:border-blue-500 hover:opacity-90">
            <p className="border border-white bg-white rounded p-8">{title}の詳細へ</p>
          </div>
        </AnimatedItem>
      )}
      {modalType === "button" && (
        <Button onClick={toggleModal}>詳細はコチラ</Button>
      )}
      {isModalOpen && (
        <AnimatedItem
          elementType="div"
          animation="fadeInOpacity"
          onClick={closeModal}
          className="fixed flex inset-0 items-center justify-center w-full h-full bg-gray-500 bg-opacity-60 z-20"
        >
          <div className="max-w-[90%] sm:w-[800px] h-[85%] pb-20 bg-gray-100 border rounded overflow-y-auto">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg text-white font-semibold px-4 py-2 bg-gray-700 rounded">
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
                    target="blank"
                    className="text-blue-500 block"
                  >
                    {githubURL}
                  </a>
                </li>
                {appURL && (
                  <li>
                    URL:
                    <a
                      href={`${appURL}`}
                      target="blank"
                      className="text-blue-500 block"
                    >
                      {appURL}
                    </a>
                  </li>
                )}
              </ul>
              <h4 className="text-lg pl-4 mt-12 mb-4 border-b-2 border-dashed border-gray-700">
                使用技術
              </h4>
              <p className="break-words whitespace-pre-wrap">{technology}</p>
              <h4 className="text-lg pl-4 mt-8 mb-4 border-b-2 border-dashed border-gray-700">
                使用パッケージの一部
              </h4>
              <p className="break-words whitespace-pre-wrap">
                {partOfThePackage}
              </p>
              <h4 className="text-lg pl-4 mt-8 mb-4 border-b-2 border-dashed border-gray-700">
                作成したきっかけ
              </h4>
              {reasonForCreation}
              <h4 className="text-lg pl-4 mt-8 mb-4 border-b-2 border-dashed border-gray-700">
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
