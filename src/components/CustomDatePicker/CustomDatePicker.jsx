// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const CustomDatePicker = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   return (
//     <div className="relative z-50">
//       <label className="text-xs font-normal text-[#B0BEC5] block border border-[#ECEFF1] p-5 rounded-md">
//         Add Dates
//         <DatePicker
//           selected={selectedDate}
//           onChange={(date) => setSelectedDate(date)}
//           dateFormat="dd-MM-yyyy"
//           placeholderText="Select a date"
//           className="w-full mt-2 border border-transparent text-[#607D8B] text-base focus:outline-none"
//           calendarClassName="bg-white shadow-lg rounded-md p-2"
//           dayClassName={(date) =>
//             "text-sm text-center hover:bg-[#E0F2F1] rounded-md transition duration-300 " +
//             (selectedDate?.toDateString() === date.toDateString()
//               ? "bg-teal-500 text-white"
//               : "text-[#546E7A]")
//           }
//         />
//       </label>
//     </div>
//   );
// };

// export default CustomDatePicker;






import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({label}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // Manually open calendar
    }
  };

  return (
    <div
      className="relative z-50 max-w-xs mx-auto py-2 px-4 cursor-pointer"
      onClick={handleClick}
    >
      <label className="block text-[12px] text-black font-medium cursor-pointer">
        {label}
      </label>
      <DatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd-MM-yyyy"
        placeholderText="Add Dates"
        calendarClassName="custom-calendar"
        dayClassName={(date) =>
          "text-sm text-center rounded-md transition-all duration-300 ease-in-out cursor-pointer " +
          (selectedDate?.toDateString() === date.toDateString()
            ? "bg-[#ff5a5f] text-white"
            : "text-[#546E7A] hover:bg-[#ffeaea]")
        }
        customInput={
          <input
            className="w-full p-0 bg-transparent text-gray focus:outline-none focus:ring-0 text-sm placeholder-[#607D8B] cursor-pointer font-normal"
            readOnly // Needed to prevent keyboard input and make all click open calendar
          />
        }
      />
    </div>
  );
};

export default CustomDatePicker;
