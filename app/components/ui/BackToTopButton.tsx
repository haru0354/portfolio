"use client"

import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY  > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={backToTop} type="button" className="fixed bottom-4 md:bottom-10 right-4 py-2 px-4 font-bold rounded-full text-white bg-blue-400 hover:bg-blue-700 transition-colors duration-300 z-10">
          トップへ戻る
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
