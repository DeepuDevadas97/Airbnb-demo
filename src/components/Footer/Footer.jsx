import React, { useState } from "react";
import AllRight from "./AllRight";

const tabs = [
  { id: "unique", label: "Unique stays" },
  { id: "categories", label: "Categories" },
];

const navItems = [
  { title: "Yurt Rentals", location: "United States", href: "#" },
  { title: "Yurt Rentals", location: "United Kingdom", href: "#" },
  { title: "Castle Rentals", location: "United States", href: "#" },
  { title: "Houseboats", location: "United States", href: "#" },
  { title: "Holiday Caravans", location: "United Kingdom", href: "#" },
  { title: "Private Island Rentals", location: "United States", href: "#" },
  { title: "Farm Houses", location: "United States", href: "#" },
  { title: "Farm Cottages", location: "United Kingdom", href: "#" },
  { title: "Cabin Rentals", location: "Australia", href: "#" },
  { title: "Luxury Cabins", location: "United Kingdom", href: "#" },
  { title: "Luxury Cabins", location: "United States", href: "#" },
  { title: "Holiday Chalets", location: "United Kingdom", href: "#" },
  { title: "Cottage Rentals", location: "United States", href: "#" },
  { title: "Holiday Cottages", location: "United Kingdom", href: "#" },
  { title: "Mansion Rentals", location: "United States", href: "#" },
  { title: "Villa Rentals", location: "United Kingdom", href: "#" },
  { title: "Holiday Bungalows", location: "United Kingdom", href: "#" },
  { title: "Show more", isButton: true },
];
const extraNavItems = [
  { title: "Bungalow Rentals", location: "United States", href: "#" },
  { title: "Condo Rentals", location: "United States", href: "#" },
  { title: "Holiday Apartments", location: "Australia", href: "#" },
  { title: "Holiday Houses", location: "United States", href: "#" },
  { title: "Holiday Houses", location: "United Kingdom", href: "#" },
  { title: "Private Holiday Rentals", location: "United Kingdom", href: "#" },
  { title: "Big House Rentals", location: "United States", href: "#" },
  { title: "Big Cottages", location: "Australia", href: "#" },
  { title: "Large Villas", location: "United Kingdom", href: "#" },
  { title: "Apartments with a Hot Tub", location: "United States", href: "#" },
  { title: "Holiday Cottages", location: "United Kingdom", href: "#" },
  { title: "Beach Cabins", location: "United States", href: "#" },
  { title: "Beach Condos", location: "United States", href: "#" },
  { title: "Beachfront Rentals", location: "United States", href: "#" },
  { title: "Beach Houses", location: "United States", href: "#" },
  { title: "Beach Villas", location: "United Kingdom", href: "#" },
  { title: "Coastal Cottages", location: "United Kingdom", href: "#" },
  { title: "Pet-Friendly Vacation Rent", location: "United States", href: "#" },
  { title: "Pet-Friendly Beach Rentals", location: "United States", href: "#" },
  { title: "Pet-Friendly Cabin Rentals", location: "United States", href: "#" },
  { title: "Dog-Friendly Cottages", location: "United Kingdom", href: "#" },
  {
    title: "Luxury Dog-Friendly Cottages",
    location: "United Kingdom",
    href: "#",
  },
];

const footerLinks = [
  { id: 1, label: "Amazing pools", href: "/amazing-pools" },
  { id: 2, label: "Arctic", href: "/arctic" },
  { id: 3, label: "Camping", href: "/camping" },
  { id: 4, label: "Camper vans", href: "/camper-vans" },
  { id: 5, label: "Castles", href: "/castles" },
  { id: 6, label: "Containers", href: "/containers" },
  { id: 7, label: "Countryside", href: "/countryside" },
  { id: 8, label: "Design", href: "/design" },
  { id: 9, label: "Earth homes", href: "/earth-homes" },
  { id: 10, label: "Farms", href: "/farms" },
  { id: 11, label: "National parks", href: "/national-parks" },
  { id: 12, label: "Vineyards", href: "/vineyards" },
  { id: 13, label: "OMG!", href: "/omg" },
  { id: 14, label: "Tiny homes", href: "/tiny-homes" },
  { id: 15, label: "Towers", href: "/towers" },
  { id: 16, label: "Windmills", href: "/windmills" },
  { id: 17, label: "Luxe", href: "/luxe" },
];

const bottomLinks = [
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "#" },
      { label: "AirCover", href: "#" },
      { label: "Anti-discrimination", href: "#" },
      { label: "Disability support", href: "#" },
      { label: "Cancellation options", href: "#" },
      { label: "Report neighbourhood concern", href: "#" },
    ],
  },
  {
    title: "Hosting",
    links: [
      { label: "Airbnb your home", href: "#" },
      { label: "AirCover for Hosts", href: "#" },
      { label: "Hosting resources", href: "#" },
      { label: "Community forum", href: "#" },
      { label: "Hosting responsibly", href: "#" },
      { label: "Join a free Hosting class", href: "#" },
      { label: "Find a co-host", href: "#" },
    ],
  },
  {
    title: "Airbnb",
    links: [
      { label: "2025 Summer Release", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "New features", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Airbnb.org emergency stays", href: "#" },
    ],
  },
];

const Footer = () => {
  const [activeTab, setActiveTab] = useState("unique");
  const [showMore, setShowMore] = useState(false);
  //   const itemsToShow = showAll ? footerLinks : footerLinks.slice(0, 12);
  return (
    <div className="bg-[#f7f7f7] pt-15">
      <div className="container">
        <h2 className="text-[24px] md:text-[28px] leading-[32px] text-black font-bold mb-5">
          Inspiration for future getaways
        </h2>

        <div className="w-full">
          <div className="w-full border-b border-gray-300">
            <div className="flex gap-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm py-3 text-left font-medium transition-all duration-300 cursor-pointer border-b-3 ${
                    activeTab === tab.id
                      ? "border-black text-black"
                      : "text-gray hover:text-black border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="py-8">
            {activeTab === "unique" && (
              <div className="w-full">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-5">
                  {(showMore
                    ? [...navItems.slice(0, -1), ...extraNavItems]
                    : navItems
                  ).map((item, index) =>
                    item.isButton ? (
                      <a
                        key={index}
                        onClick={() => setShowMore(true)}
                        className="text-sm font-medium text-black cursor-pointer"
                      >
                        Show more ▼
                      </a>
                    ) : (
                      <li key={index}>
                        <a href={item.href} className="group inline-block">
                          <div className="font-medium text-[13px] sm:text-sm text-black">
                            {item.title}
                          </div>
                          <div className="text-[13px] sm:text-sm text-gray group-hover:text-black duration-300">
                            {item.location}
                          </div>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
            {activeTab === "categories" && (
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-5">
                {footerLinks.map((link) => (
                  <li>
                    <a
                      key={link.id}
                      href={link.href}
                      className="font-medium text-[13px] sm:text-sm text-black hover:text-black/80 duration-300 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <nav className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {bottomLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium mb-3 text-black">{section.title}</h3>
              <ul className="space-y-3.5">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:underline text-[13px] sm:text-sm text-black hover:text-black/80 duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="mt-10">
            <AllRight/>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React, { useState } from "react";

// const tabs = [
//   { id: "unique", label: "Unique stays" },
//   { id: "categories", label: "Categories" },
// ];

// const Footer = () => {
//   const [activeTab, setActiveTab] = useState("unique");

//   return (
//     <div className="bg-[#f7f7f7] pt-15">
//       <div className="container mx-auto px-4">
//         <h2 className="text-[28px] leading-[28px] text-black font-bold mb-5">
//           Inspiration for future getaways
//         </h2>

//         <div className="w-full">
//           {/* Tab Buttons */}
//           <div className="w-full border-b border-gray-300">
//             <div className="flex gap-x-8">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`py-2 text-left font-medium transition-all duration-300 cursor-pointer ${
//                     activeTab === tab.id
//                       ? "border-b-2 border-black text-black"
//                       : "text-gray-500 hover:text-black"
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Tab Content with fade animation */}
//           <div className="py-4 min-h-[80px] relative">
//             <div
//               className="transition-opacity duration-500 opacity-100 animate-fadeIn"
//               key={activeTab}
//             >
//               {activeTab === "unique" && <div>🏠 Home content goes here.</div>}
//               {activeTab === "categories" && (
//                 <div>👤 Profile content goes here.</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
