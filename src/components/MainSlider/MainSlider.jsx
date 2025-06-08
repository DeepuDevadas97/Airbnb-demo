import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import HomeCard from "../HomeCard/HomeCard";
import RightArrow from "../../assets/icons/RightArrow";
import { popularHotels } from "../../data/data";

const MainSlider = ({ sliderId, data }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevClass = `${sliderId}-prev`;
  const nextClass = `${sliderId}-next`;

  return (
    <div className="relative" id={sliderId}>
      <button
        className={`hidden ${prevClass} w-6 h-6 md:flex items-center justify-center cursor-pointer absolute right-[32px] top-[-30px] -translate-y-1/2 z-10 rounded-full border duration-300 ${
          isBeginning
            ? "border-gray-200"
            : "border-gray-400 bg-gray-100 hover:bg-gray-200"
        }`}
      >
        <div
          className={`rotate-180 ${isBeginning ? "opacity-30" : "opacity-100"}`}
        >
          <RightArrow />
        </div>
      </button>
      <button
        className={`hidden ${nextClass} w-6 h-6 md:flex items-center justify-center cursor-pointer absolute right-0 top-[-30px] -translate-y-1/2 z-10 rounded-full border duration-300 ${
          isEnd
            ? "border-gray-200"
            : "border-gray-400  bg-gray-100  hover:bg-gray-200"
        }`}
      >
        <div className={`${isEnd ? "opacity-30" : "opacity-100"}`}>
          <RightArrow />
        </div>
      </button>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        navigation={{
          nextEl: `#${sliderId} .${nextClass}`,
          prevEl: `#${sliderId} .${prevClass}`,
        }}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
        }}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1},
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
          1800: { slidesPerView: 6 },
        }}
        className="mySwiper"
      >
        {data.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <HomeCard data={hotel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
