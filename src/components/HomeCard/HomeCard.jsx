import React, { useState } from "react";
import HomeImg1 from "../../assets/images/home1.webp";
import HeartOutline from "../../assets/icons/HeartOutline";
import HeartFill from "../../assets/icons/HeartFill";

const HomeCard = ({data}) => {
  const [like, setLike] = useState(false);
  return (
    <div className="card-wrapper w-full max-w-full 2xl:max-w-full p-2 rounded-[30px] bg-white border border-gray-300 cursor-pointer group">
      <div className="w-full h-[200px] bg-gray-200 rounded-[24px] overflow-hidden">
        <img
        //   src={HomeImg1}
         src={data.imgUrl}
          alt="home-image1"
          className="w-full h-full object-cover group-hover:brightness-[80%] duration-500"
        />
      </div>
      <div className="px-2 pt-4 pb-3">
        <h3 className="font-bold text-md md:text-[18px] leading-6 text-black mb-1 text-left">
          {/* Loft in Richmond Town */}
          {data.title}
        </h3>
        <div className="flex items-center gap-x-1">
          <p className="text-gray text-[12px] leading-4 font-normal">
            <span>{data.price}</span> for <span>{data.days}</span> .
          </p>
          <div className="star-wrapper flex items-center gap-0.5">
            <span className="text-gray text-[12px]">★</span>
            <span className="text-gray text-[12px] leading-4 font-normal">
              {data.rating}
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between gap-x-3">
          <div className="bg-black text-white rounded-[20px] px-4 py-2 text-sm">
            Guest favourite
          </div>
          <button
            className="w-9 h-9 border border-gray-300 rounded-full cursor-pointer flex justify-center items-center pt-0.5"
            type="button"
            onClick={() => setLike(!like)}
          >
            {like ? <HeartFill /> : <HeartOutline />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
