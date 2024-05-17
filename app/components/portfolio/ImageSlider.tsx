import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

type ImageSliderProps = {
  items: Items[];
};

type Items = {
  image: string;
  text: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i: number) => (
      <a>
        <Image
          src={items[i].image}
          alt={`Thumbnail ${i + 1}`}
          width={140}
          height={94}
        />
      </a>
    ),
    dotsClass: "custom-dots", // カスタムクラスを設定
  };

  return (
      <Slider {...settings}>
        {items?.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={380}
              height={250}
              className="mx-auto mb-4 border border-gray-300 shadow rounded"
            />
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </Slider>
  );
};

export default ImageSlider;
