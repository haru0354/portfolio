"use client";

import { useState } from "react";
import AnimatedItem from "./lib/AnimatedItem";
import CloseButton from "./ui/CloseButton";
import Button from "./ui/Button";
import Image from "next/image";

type ModalProps = {
  modalType: "image" | "button";
  src: string;
  alt: string;
  title: string;
  overview: string;
  technology: string;
  partOfThePackage: string;
  reasonForCreation: string;
  commitment: string;
  githubURL: string;
  appURL?: string;
};

const Modal: React.FC<ModalProps> = ({
  src,
  alt,
  title,
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
          className="text-center p-1 m-1 max-w-[520px] relative rounded-lg border-2 border-blue-50  hover:border-blue-500  cursor-pointer"
          onClick={toggleModal}
        >
          <Image
            src={src}
            width={460}
            height={330}
            alt={alt}
            className="mx-auto block border border-gray-300 rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            {title}
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
          <div className="w-[90%] sm:w-[800px] h-[85%] pb-20 bg-gray-100 border rounded overflow-y-auto">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg text-white font-semibold px-4 py-2 bg-gray-700 rounded">
                {title}
              </h3>
              <CloseButton onClick={closeModal} />
            </div>
            <div className="mx-10">
              <Image
                src="/image_webp/merlion.webp"
                alt="a"
                width={300}
                height={250}
                className="mx-auto mb-4"
              />
              <p>{overview}</p>
              <ul>
                <li>
                  GitHub:
                  <a
                    href={`${githubURL}`}
                    target="blank"
                    className="text-blue-500"
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
                      className="text-blue-500"
                    >
                      {appURL}
                    </a>
                  </li>
                )}
              </ul>
              <h4 className="text-lg pl-4 mt-8 mb-4 border-b-2 border-dashed border-gray-700">
                使用技術
              </h4>
              <p>{technology}</p>
              パッケージの一例：{partOfThePackage}
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
