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
  Grid,
  ListIcon,
  Grid3x3,
  LayoutGrid,
  LayoutList,
} from "lucide-react";

import Product from "@/interfaces/product";
import MenuList from "@/components/menu";
import Collapsable from "@/components/collapsable";
import Category from "@/components/category";
import Modal from "@/components/modal";

import SubscriptionBanner from "@/components/subscription-banner";
import CategoryBanner from "@/components/category-banner";
import TopCategory from "@/components/top-category";
import Header from "@/components/header";
import SortBy from "@/components/sort-by";
import ShowPageNumbers from "@/components/show-page-numbers";
import ShowGridBtn from "@/components/button/show-grid-btn";
import ShowListBtn from "@/components/button/show-list-btn";
import PageBtn from "@/components/button/page-btn";
import Paginator from "@/components/paginator";
import CartItem from "@/components/shopping-cart/cart-item";

export default function Home() {
  const products: Product[] = [
    {
      id: 1,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product15.jpg",
      name: "Laptop Stand",
      tags: ["ACCESSORIES"],
      price: [110, 120],
      vendor: "Vendor1",
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
      vendor: "Vendor2",
    },
    {
      id: 3,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2019/06/shop22_product21.jpg",
      name: "Camera Go Pro",
      tags: ["CAMERA", "GO PRO"],
      price: [320, 450],
      currency: "$",
      discount: 0,
      vendor: "Vendor3",
    },
    {
      id: 4,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/06/shop22_product6.jpg",
      name: "HD Camera",
      tags: ["HD CAMERA", "CAMERA"],
      price: [320],
      currency: "$",
      discount: 30,
      vendor: "Vendor4",
    },
    {
      id: 5,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product11.jpg",
      name: "Battery Charger",
      tags: ["CAMERA ACCESSORIES", "ACCESSORIES"],
      price: [120],
      currency: "$",
      discount: 0,
      vendor: "Vendor5",
    },
    {
      id: 6,
      url: "https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product11.jpg",
      name: "Battery Charger",
      tags: ["CAMERA ACCESSORIES", "ACCESSORIES"],
      price: [90],
      currency: "$",
      discount: 0,
      vendor: "Vendor6",
    },
  ];

  return (
    <>
      <Header />

      <div className="hidden md:block h-[55px] border-b-1 border-gray-100 ">
        <div className="container mx-auto flex items-center">

          <div className="w-[24.75%]  pl-4 pt-4.5 pb-4.5 flex items-center bg-fade-black text-sm text-white font-bold cursor-pointer">
            <Menu size={13} className="inline mr-3" /> <span>Shop By Category</span>
          </div>
          <TopMenu />
        </div>
      </div>
      <Breadcrumb />
      <div className="container mx-auto flex mb-2">
        <div className="hidden lg:block w-[15%] pr-5 border-r border-gray-200">
          <Collapsable key="1" title="Categories">
            <Category />
          </Collapsable>

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

        <div className="w-full md:w-[85%] flex flex-wrap  pl-4 gap-5  lg:gap-6.5 ">
          <CategoryBanner />
          <div className=" w-full flex justify-between">
            <SortBy />
            <div className="flex"> <ShowPageNumbers />
              <ShowGridBtn/>
              <ShowListBtn/>
            </div>
          </div>
          {products.map((product) => (
            <ProductCard
              key={product.id.toString()}
              size={235}
              product={product}
            />
          ))}
          <div className=" w-full ">

            <div className="flex justify-between">
              <ShowPageNumbers />
              <Paginator />
            </div>
          </div>
        </div>
      </div>

      <TopCategory />

      <SubscriptionBanner />
      <Modal title="Hello">
        <h3>Content Area</h3>
      </Modal>
      <div className="fixed bg-veil backdrop-blur-sm z-15 block w-full h-full top-0 left-0 ">
        <div className="fixed z-16 bg-white h-full w-[90%] md:w-80 top-0 right-0  px-5 py-7 opacity-100">
          <div className="flex justify-between font-bold mb-3">
            <span>0 ITEMS</span>
            <a href="#">VIEW CART</a>
          </div>
          <div className="h-[86%] md:h-[80%] scrollbar xl:h-[80%] 2xl:h-[85%] border-t border-b border-gray-200 block overflow-x-hidden overflow-y-auto">
            <CartItem product={products[0]}/>
            <CartItem product={products[1]}/>
            <CartItem product={products[2]}/>
            <CartItem product={products[2]}/>
            <CartItem product={products[2]}/>
            <CartItem product={products[2]}/>
            <CartItem product={products[2]}/>
            <CartItem product={products[2]}/>
            <CartItem product={products[2]}/>
            <CartItem product={products[2]}/>
            <CartItem product={products[2]}/>
          
          </div>
          <div className="flex justify-between mt-3 mb-4 font-bold">
            <span>SUB TOTAL:</span>
            <span>1000.00</span>
          </div>
          <div className="bg-fade-black p-3 text-center hover:bg-fade-black-hover transition duration-250  text-white " >CHECKOUT</div>
        </div>
      </div>
    </>
  );
}
