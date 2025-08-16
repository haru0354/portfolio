import Image from "next/image";

import AnimatedItem from "../../ui/AnimatedItem";
import ErrorText from "./ErrorText";

const FooterImage = () => {
  return (
    <section className="relative overflow-hidden">
      <AnimatedItem animation="fadeInDown" elementType="div">
        <Image
          src="/image_webp/footer-image-portfolio01.webp"
          width={1000}
          height={320}
          alt="エンジニアの仕事中の画像"
          className="mx-auto"
        />
      </AnimatedItem>
      <ErrorText animationType="blink" direction="right" position="top" />
      <ErrorText animationType="bounce" direction="bottom" position="left" />
    </section>
  );
};

export default FooterImage;
