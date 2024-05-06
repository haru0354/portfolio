"use client"

import Button from "./Button";

const BackToTopButton = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <Button onClick={backToTop} >トップへ戻る</Button>;
};

export default BackToTopButton;
