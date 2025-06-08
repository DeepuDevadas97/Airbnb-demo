import WebIcon from "../../assets/icons/WebIcon";
import Facebook from "../../assets/icons/Facebook";
import Instagram from "../../assets/icons/Instagram";
import Twitter from "../../assets/icons/Twitter";

const AllRight = () => {
  return (
    <div className="w-full flex flex-col-reverse gap-3 sm:flex-row items-center justify-between py-6 border-t border-gray-300">
      <nav>
        <ul className="flex items-center gap-6 text-black text-sm">
          <li>© 2025 Airbnb, Inc.</li>
          <li className="hidden lg:block hover:text-black/80 duration-300">
            <a href="#">Privacy</a>
          </li>
          <li className="hidden lg:block hover:text-black/80 duration-300">
            <a href="#">Terms</a>
          </li>
          <li className="hidden lg:block hover:text-black/80 duration-300">
            <a href="#">Sitemap</a>
          </li>
          <li className="hidden lg:block hover:text-black/80 duration-300">
            <a href="#">Company details</a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex items-center gap-4 text-sm text-black font-medium">
          <li>
            <a href="#" className="inline-flex items-center gap-2">
              <WebIcon /> <span>English (IN)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-2">
              ₹<span>INR</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 bg-[#f2f2f2] hover:bg-gray-200 rounded-full duration-300 flex justify-center items-center"
            >
              <Facebook />
            </a>
          </li>
                    <li>
            <a
              href="#"
              className="w-8 h-8 bg-[#f2f2f2] hover:bg-gray-200 rounded-full duration-300 flex justify-center items-center"
            >
              <Twitter/>
            </a>
          </li>
                    <li>
            <a
              href="#"
              className="w-8 h-8 bg-[#f2f2f2] hover:bg-gray-200 rounded-full duration-300 flex justify-center items-center"
            >
                <Instagram/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllRight;
