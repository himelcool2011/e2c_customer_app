import Breadcrumb from "@/components/breadcrumb";
import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import SubscriptionInput from "@/components/subscription-input";
import TopMenu from "@/components/top-menu";
import {
  UserRound,
  HeartIcon,
  ShoppingCart,
  ChevronDown,
  Menu,
  ShoppingBasket,
  Minus,
} from "lucide-react";
import Image from "next/image";
import Product from "@/interfaces/product";
import MenuList from "@/components/menu";
import Collapsable from "@/components/collapsable";
import Category from "@/components/category";
import Modal from "@/components/modal";

import SubscriptionBanner from "@/components/subscription-banner";
import CategoryBanner from "@/components/category-banner";
import TopCategory from "@/components/top-category";
import Header from "@/components/header";

export default function Home() {
  const products: Product[] = [
    {
      id: 1,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product15.jpg",
      name: "Laptop Stand",
      tags: ["ACCESSORIES"],
      price: [110, 120],
      currency: "$",
      discount: 0,
    },
    {
      id: 2,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2013/06/shop22_product1.jpg",
      name: "Smart Watch",
      tags: ["SMART WATCH", "WRIST WATCH"],
      price: [220],
      currency: "$",
      discount: 50,
    },
    {
      id: 3,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2019/06/shop22_product21.jpg",
      name: "Camera Go Pro",
      tags: ["CAMERA", "GO PRO"],
      price: [320, 450],
      currency: "$",
      discount: 0,
    },
    {
      id: 4,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/06/shop22_product6.jpg",
      name: "HD Camera",
      tags: ["HD CAMERA", "CAMERA"],
      price: [320],
      currency: "$",
      discount: 30,
    },
    {
      id: 5,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product11.jpg",
      name: "Battery Charger",
      tags: ["CAMERA ACCESSORIES", "ACCESSORIES"],
      price: [120],
      currency: "$",
      discount: 0,
    },
    {
      id: 6,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product11.jpg",
      name: "Battery Charger",
      tags: ["CAMERA ACCESSORIES", "ACCESSORIES"],
      price: [90],
      currency: "$",
      discount: 0,
    },
  ];

  return (
    <>
      <Header />

      {/* <div className="hidden md:block h-[55px] border-b-1 border-gray-100 ">
        <div className="container mx-auto flex items-center">

          <div className="w-[24.75%]  pl-4 pt-4.5 pb-4.5 flex items-center bg-fade-black text-sm text-white font-bold cursor-pointer">
            <Menu size={13} className="inline mr-3" /> <span>Shop By Category</span>
          </div>
          <TopMenu />
        </div>
      </div> */}
      <Breadcrumb />
      <div className="container mx-auto flex mb-2">
        <div className="hidden lg:block w-[15%] pr-5 border-r border-gray-200">
          <Collapsable key="1" title="Categories">
            <Category />
          </Collapsable>
          {/* <aside className="pb-4 mb-2 border-b-1 border-gray-200"> */}
          {/* <h3 className="flex h-[30px] text-base/8  justify-between font-bold text-fade-black"><span >Categories </span><span><Minus className="inline"/></span></h3>   */}
          {/* <Sidebar/> */}
          {/* <ul className="mt-2 text-sm text-gray-400 font-semibold">
              <li className="py-2" ><a className="hover:text-gray-700 transition duration-150" href="#">Electorinics</a> <span>(10)</span></li>
              <li className="py-2"><a className="hover:text-gray-700 transition duration-150" href="#">Fashion</a> <span>(14)</span></li>
              <li className="py-2"><a className="hover:text-gray-700 transition duration-150" href="#">Gifts</a> <span>(20)</span></li>
              <li className="py-2"><a className="hover:text-gray-700 transition duration-150" href="#">Music</a> <span>(15)</span></li>
              <li className="py-2"><a className="hover:text-gray-700 transition duration-150" href="#">Trousers</a> <span>(12)</span></li>
            </ul> */}
          {/* </aside> */}
          <Collapsable key="2" title="Price">
            Prices
          </Collapsable>
          <Collapsable key="3" title="Color">
            Color
          </Collapsable>
          <Collapsable key="4" title="Size">
            Size
          </Collapsable>
        </div>
        <div className="w-full md:w-[85%] flex flex-wrap  pl-4 pr-2 gap-5   pt-2 ">
          {products.map((product) => (
            <ProductCard
              key={product.id.toString()}
              size={235}
              product={product}
            />
          ))}
        </div>
      </div>

      <TopCategory />
      <CategoryBanner />
      <SubscriptionBanner />
      <Modal title="Hello">
        <h3>Content Area</h3>
      </Modal>
    </>
  );
}
