"use client";
import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImgOne from "/public/bannerImgOne.jpg";
import bannerImgTwo from "/public/bannerImgTwo.jpg";
import bannerImgThree from "/public/bannerImgThree.jpg";
import bannerImgFour from "/public/bannerImgFour.jpg";

interface ArrowProps {
  onClick: () => void; // onClick function prop
}

// SampleNextArrow Component
const SampleNextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="w-10 h-10 md:w-12 md:h-12 absolute top-1/2 transform -translate-y-1/2 right-10 z-30 border-[1px] border-gray-900 bg-black/50 hover:bg-black shadow-btnShadow flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-300 text-lg" />
    </div>
  );
};

// SamplePrevArrow Component
const SamplePrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="w-10 h-10 md:w-12 md:h-12 absolute top-1/2 transform -translate-y-1/2 left-10 z-30 border-[1px] border-gray-900 bg-black/50 hover:bg-black shadow-btnShadow flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-300 text-lg" />
    </div>
  );
};

// Banner Component
const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={() => {}} />, // Placeholder function
    prevArrow: <SamplePrevArrow onClick={() => {}} />, // Placeholder function
  };

  return (
    <div className="w-full h-auto md:h-[650px] relative">
      <Slider {...settings}>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgOne}
            loading={"eager"}
            alt="bannerImgOne"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgTwo}
            loading={"lazy"}
            alt="bannerImgTwo"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgThree}
            loading={"lazy"}
            alt="bannerImgThree"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgFour}
            loading={"lazy"}
            alt="bannerImgFour"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
