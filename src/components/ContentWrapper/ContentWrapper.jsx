
// import RightArrow from "../../assets/icons/RightArrow";
// import MainSlider from "../MainSlider/MainSlider";

// const ContentWrapper = ({title}) => {
//   return (
//     <div className="container">
//       <div className="mb-4 max-w-[400px]">
//         <a href="#" className="inline-flex items-center gap-1">
//           <h2 className="text-[20px] md:text-[22px] leading-[24px] font-bold text-black">
//             {title}
//           </h2>{" "}
//           <span className="mt-1">
//             <RightArrow />
//           </span>
//         </a>
//       </div>
//       <div>
//         <MainSlider/>
//       </div>
//     </div>
//   );
// };

// export default ContentWrapper;



import RightArrow from "../../assets/icons/RightArrow";
import MainSlider from "../MainSlider/MainSlider";

const ContentWrapper = ({ title, data }) => {
  const sliderId = title.toLowerCase().replace(/\s+/g, "-"); // Generate id from title

  return (
    <div className="container">
      <div className="mb-4 max-w-[400px]">
        <a href="#" className="inline-flex items-center gap-1">
          <h2 className="text-[20px] md:text-[22px] leading-[24px] font-bold text-black">
            {title}
          </h2>
          <span className="mt-1">
            <RightArrow />
          </span>
        </a>
      </div>
      <div>
        <MainSlider sliderId={sliderId} data={data}/>
      </div>
    </div>
  );
};

export default ContentWrapper;

