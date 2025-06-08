import SearchFilter from "../SearchFilter/SearchFilter";

const HeroSection = () => {
  return (
    <div className="container w-full relative">
      <div className="fade-in-up w-full h-[35vh] rounded-[30px] overflow-hidden bg-[url('./assets/images/hero-bg.webp')] bg-cover bg-center relative flex flex-col justify-center items-center gap-4 px-5">
        <div className="absolute left-0 top-0 w-full h-full bg-[#1e0c00] opacity-60"></div>
        <h1 className="fade-in-up text-white relative z-10 text-[36px] md:text-[42px] font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] text-center leading-[40px] md:leading-[46px]">
          Book your stay with Airbnb
        </h1>
        <p className="fade-in-up text-white text-[16px] md:text-[18px] font-light md:font-medium relative z-10 text-center leading-[24px]">
          1,480,062 rooms around the world are waiting for you!
        </p>
      </div>

      <div className="mt-[-40px] flex justify-center relative z-40">
        <SearchFilter />
      </div>
    </div>
  );
};

export default HeroSection;





