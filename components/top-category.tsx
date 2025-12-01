// import {
//   Gauge, // 1. (Kept)
//   Gift, // 2. (Kept)
//   Microphone, // 3. (Kept)
//   Car, // 4. (Kept)
//   House, // 5. (New: Home/Dashboard)
//   User, // 6. (New: Profile/Account)
//   ShoppingCart, // 7. (New: Cart/E-commerce)
//   Gear,
//   TShirt,
//   Television,
//   Laptop,
//   Tree, // 8. (New: Settings)
// } from "phosphor-react";

import {
  Gauge,
  Gift,
  Mic,
  Car,
  Home,
  User,
  ShoppingCart,
  Settings,
  Shirt,
  Tv,
  Laptop,
  Trees,
} from "lucide-react";

const categories = [
  { Icon: Shirt, label: "Fashion" },
  { Icon: Laptop, label: "Electronics" },
  { Icon: Gift, label: "Gifts" },
  { Icon: Trees, label: "Garden" },
  { Icon: Mic, label: "Music" },
  { Icon: Car, label: "Motors" },
  { Icon: Home, label: "Furniture" },
];

type CategoryItemDef  = {
  IconComponent: any,
  label: string
}

// --- Reusable Category Item Component ---
const CategoryItem = ({ IconComponent, label }:CategoryItemDef) => {
  return (
    // Outer div for the entire category item, handles the text hover color
    <div className="flex flex-col items-center shrink-0 group hover:text-[#01abec] cursor-pointer">
      {/* Circle Container: w/h define size, bg color, and hover bg color */}
      <div className="flex items-center justify-center w-full lg:h-30 lg:w-30  p-6 bg-[#f4f4f4] rounded-full group-hover:bg-[#01abec] transition-colors duration-300">
        {/* Icon Component: Size and default color (which changes due to the group-hover) */}
        <IconComponent
          className="text-3xl text-gray-700 group-hover:text-white transition-colors duration-300"
          weight="regular"
          size={32}
        />
      </div>

      {/* Label: Applies text hover color */}
      <p className="text-md font-bold transition-colors duration-300">
        {label}
      </p>
    </div>
  );
};

// --- Main Component ---
export default function TopCategory() {
  return (
    <div className="container mx-auto">
      <div className=" flex flex-col">
        <div className="text-lg font-bold pb-2">
          <h1>Top Categories</h1>
        </div>

        <div className="w-full h-px  bg-gray-300"></div>

        {/* The Scrollable Container */}
        <div className="flex flex-row gap-20 p-4 w-full cursor-pointer overflow-x-auto whitespace-nowrap scrollbar-hide px-4 touch-pan-x">
          {/* Loop through the data to render all category items */}
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              IconComponent={category.Icon}
              label={category.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
