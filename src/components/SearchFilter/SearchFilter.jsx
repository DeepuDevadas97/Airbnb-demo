// import { useState } from "react";
// import WebIcon from "../../assets/icons/WebIcon";

// const SearchFilter = () => {

//   return (
//     <div className="max-w-[760px] h-[60px] bg-white shadow-md rounded-full flex justify-center text-xs font-medium overflow-hidden">
//       {/* Location */}
//       <div className="relative w-[30%] px-6 py-3 hover:bg-gray-100 transition-all duration-300">
//         <p className="text-gray-800">Location</p>
//         <input
//           type="text"
//           placeholder="Where are you going?"
//           className="bg-transparent border-none focus:outline-none placeholder:text-sm"
//         />
//       </div>

//       {/* Check-in */}
//       <div className="relative w-[22%] px-6 py-3 hover:bg-gray-100 transition-all duration-300 border-l border-gray-200">
//         <p className="text-gray-800">Check in</p>
//         <input
//           type="text"
//           placeholder="Add dates"
//           className="bg-transparent border-none focus:outline-none placeholder:text-sm"
//         />
//       </div>

//       {/* Check-out */}
//       <div className="relative w-[22%] px-6 py-3 hover:bg-gray-100 transition-all duration-300 border-l border-gray-200">
//         <p className="text-gray-800">Check out</p>
//         <input
//           type="text"
//           placeholder="Add dates"
//           className="bg-transparent border-none focus:outline-none placeholder:text-sm"
//         />
//       </div>

//       {/* Guests */}
//       <div className="relative w-[25%] px-6 py-3 hover:bg-gray-100 transition-all duration-300 border-l border-gray-200">
//         <p className="text-gray-800">Guests</p>
//         <input
//           type="text"
//           placeholder="Add guests"
//           className="bg-transparent border-none focus:outline-none placeholder:text-sm"
//         />
//         <span className="absolute top-1/2 right-3 -translate-y-1/2 bg-[#FF385C] text-white text-sm p-3 rounded-full">
//           <WebIcon/>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;

import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import SearchIcon from "../../assets/icons/SearchIcon";

const SearchFilter = () => {
  return (
    <>
      <div className="mx-auto max-w-[840px] hidden lg:block">
        <div
          className="bg-white border border-red-200 rounded-full flex pl-[32px] py-2 flex-col md:flex-row items-center justify-between px-4 gap-2 md:gap-4"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-xs font-medium text-black leading-[18px]">
              Where
            </label>
            <input
              type="text"
              placeholder="Search Destinations"
              className="outline-none text-sm text-gray placeholder-[#607D8B] font-normal leading-6"
            />
          </div>

          <div className="flex flex-col md:border-l border-gray-300 w-full md:w-auto">
            <CustomDatePicker label={"Check in"} />
          </div>

          <div className="flex flex-col md:border-x border-gray-300 w-full md:w-auto">
            <CustomDatePicker label={"Check out"} />
          </div>

          <div className="flex flex-col w-full md:w-auto">
            <label className="text-xs font-medium text-black leading-[18px]">
              Who
            </label>
            <input
              type="number"
              placeholder="Add guests"
              className="outline-none text-sm text-gray placeholder-[#607D8B] font-normal leading-6 max-w-[96px]"
              min="1"
            />
          </div>

          <button className="bg-brand text-white flex justify-center items-center w-12 h-12 rounded-full text-sm hover:bg-red-500 transition duration-300 cursor-pointer">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div
        className="flex items-center justify-between pl-4 pr-2 lg:hidden w-[85%] sm:w-[70%] md:w-[60%] h-13 sm:h-15 mt-3 sm:mt-2 rounded-full overflow-hidden bg-white border-red-200"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <input
          type="text"
          placeholder="Search Destinations"
          className="w-[80%] h-full focus:ring-0 outline-0 border-0"
        />
        <button className="bg-brand text-white flex justify-center items-center w-10 h-10 rounded-full text-sm hover:bg-red-500 transition duration-300 cursor-pointer ">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchFilter;
