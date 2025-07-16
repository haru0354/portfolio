"use client";

import { useState } from "react";
import Image from "next/image";

import AnimatedItem from "./AnimatedItem";
import CloseButton from "./CloseButton";
import Button from "./Button";
import ImageSlider from "./ImageSlider";
import ModalSectionBlock from "./ModalSectionBlock";

type ModalProps = {
  modalType: "image" | "button";
  title: string;
  firstImage: FirstImage;
  sliderItems: SliderItems[];
  explanations: Explanations;
  urls: URLs;
};

type FirstImage = {
  src: string;
  alt: string;
};

type SliderItems = {
  image: string;
  text: string;
};

type Explanations = {
  overview: string;
  technology?: string;
  partOfThePackage?: string;
  reasonForCreation?: string;
  commitment?: string;
};

type URLs = {
  githubURL: string;
  appURL?: string;
};

const Modal: React.FC<ModalProps> = ({
  title,
  firstImage,
  sliderItems,
  modalType,
  explanations,
  urls,
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
            src={firstImage.src}
            width={460}
            height={330}
            alt={firstImage.alt}
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
        <AnimatedItem elementType="div" animation="fadeInScale">
          <Button onClick={toggleModal} type="button">
            詳細はコチラ
          </Button>
        </AnimatedItem>
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
              <h3 className="text-lg font-semibold px-4 py-3 rounded text-white bg-gray-700">
                {title}
              </h3>
              <CloseButton onClick={closeModal} />
            </div>
            <div className="mx-10 break-words">
              <ImageSlider items={sliderItems} />
              <p className="mt-6">{explanations.overview}</p>
              <ul>
                <li>
                  GitHub:
                  <a
                    href={`${urls.githubURL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600"
                  >
                    {urls.githubURL}
                  </a>
                </li>
                {urls.appURL && (
                  <li>
                    URL:
                    <a
                      href={`${urls.appURL}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600"
                    >
                      {urls.appURL}
                    </a>
                  </li>
                )}
              </ul>
              {explanations.technology && (
                <ModalSectionBlock
                  title="使用技術"
                  contents={explanations.technology}
                />
              )}
              {explanations.partOfThePackage && (
                <ModalSectionBlock
                  title="使用パッケージの一部"
                  contents={explanations.partOfThePackage}
                />
              )}
              {explanations.reasonForCreation && (
                <ModalSectionBlock
                  title="作成したきっかけ"
                  contents={explanations.reasonForCreation}
                />
              )}
              {explanations.commitment && (
                <ModalSectionBlock
                  title="作成をしてみて"
                  contents={explanations.commitment}
                />
              )}
            </div>
          </div>
        </AnimatedItem>
      )}
    </>
  );
};

export default Modal;
