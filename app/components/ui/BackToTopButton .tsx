"use client"

import { useEffect, useState } from "react";
import Button from "./Button";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY  > 300) { // 300pxより下にスクロールしたらボタンを表示
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
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={backToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          トップへ戻る
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
