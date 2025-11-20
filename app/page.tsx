import Breadcrumb from "@/components/breadcrumb";
import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import SubscriptionInput from "@/components/subscription-input";
import TopMenu from "@/components/top-menu";
import { UserRound, HeartIcon, ShoppingCart, ChevronDown, Menu, ShoppingBasket, Minus } from "lucide-react";
import Image from "next/image";
import Product from "@/interfaces/product";
import MenuList from "@/components/menu";
import Collapsable from "@/components/collapsable";
import Category from "@/components/category";



export default function Home() {


  const products:Product[]=[
    
    {
      id:1,
      url: 'https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product15.jpg',
      name: 'Laptop Stand',
      tags:['ACCESSORIES'],
      price: [110,120],
      currency:'$',
      discount:0
    },
    {
      id:2,
      url: 'https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2013/06/shop22_product1.jpg',
      name: 'Smart Watch',
      tags:['SMART WATCH','WRIST WATCH'],
      price: [220],
      currency:'$',
      discount:50
    },
    {
      id:3,
      url: 'https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2019/06/shop22_product21.jpg',
      name: 'Camera Go Pro',
      tags:['CAMERA','GO PRO'],
      price: [320,450],
      currency:'$',
      discount:0
    },
    {
      id:4,
      url: 'https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/06/shop22_product6.jpg',
      name: 'HD Camera',
      tags:['HD CAMERA','CAMERA'],
      price: [320],
      currency:'$',
      discount:30
    },
    {
      id:5,
      url: 'https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product11.jpg',
      name: 'Battery Charger',
      tags:['CAMERA ACCESSORIES','ACCESSORIES'],
      price: [120],
      currency:'$',
      discount:0
    },
    {
      id:6,
      url: 'https://www.portotheme.com/wordpress/porto/shop22-wcfm/wp-content/uploads/sites/207/2018/02/shop22_product11.jpg',
      name: 'Battery Charger',
      tags:['CAMERA ACCESSORIES','ACCESSORIES'],
      price: [90],
      currency:'$',
      discount:0
    }
    
  ]

  


  return (
    <>
      
      <div className="bg-header h-[84px]">
        <div className="container md:mx-auto">
          <div className="flex items-center h-[84px] justify-between px-3 md:px-0 pt-2 pb-4">
            <div className="flex items-center">
              <Menu className="block md:hidden inline text-white mr-2"/>
              <span className="text-white text-2xl font-semibold">e2c</span>
            </div>
            <SearchBar />
            <div className="flex items-center md:justify-end  md:w-60 gap-x-1 md:gap-x-3 ">
              <span className=" text-white text-md font-semibold ">
                <UserRound className="hidden md:block rounded-full border-1 p-2 border-white w-12 h-12" />
                <UserRound className=" md:hidden  md:p-2 w-8 h-8 md:w-12 md:h-12" />
                </span>
              <div className="hidden md:block text-white text-md font-semibold">
                <div className="font-light">Hello!</div>
                <div>My Account</div>
              </div>
              <span  className=""><HeartIcon className="text-white w-8 h-8" /></span>
              <span><ShoppingCart className="text-white w-8 h-8" /></span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block h-[55px] border-b-1 border-gray-100 ">
        <div className="container mx-auto flex items-center">

          <div className="w-[24.75%]  pl-4 pt-4.5 pb-4.5 flex items-center bg-fade-black text-sm text-white font-bold cursor-pointer">
            <Menu size={13} className="inline mr-3" /> <span>Shop By Category</span>
          </div>
          <TopMenu />
        </div>
      </div> */}
      <Breadcrumb/>
      <div className="container mx-auto flex mb-2">
        <div className="hidden lg:block w-[15%] pr-5 border-r-1 border-gray-200">
          <Collapsable key="1" title="Categories"><Category/></Collapsable>
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
          <Collapsable key="2" title="Price">Prices</Collapsable>
          <Collapsable key="3" title="Color">Color</Collapsable>
          <Collapsable key="4" title="Size">Size</Collapsable>
          
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-wrap  pl-4 pr-2 gap-5   pt-2 ">
          { products.map((product)=> <ProductCard key={product.id.toString()} size={235} product={product}/>)}
        </div>
      </div>

      {/* <div className="bg-header h-[88px] pt-5 pb-5">
        <div className="container mx-auto flex items-center justify-between">
          <span className="text-white font-semibold text-md lg:text-md 2xl:text-2xl ">Sign Up to Newsletter</span>
          <div className="text-white text-md font-semibold">
            <div className="font-light">Get all the latest information on Event, Sales and Offers.</div>
            <div>Receive $10 coupon for first shopping.</div>
          </div>
          <SubscriptionInput />
        </div>
      </div> */}

      <div className="bg-header md:h-[88px] pt-5 pb-5">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center text-left  md:justify-between">
          <span className="text-white font-semibold ml-1 px-5 md:ml-0 md:px-0 text-md lg:text-md 2xl:text-2xl ">Sign Up to Newsletter</span>
          <div className="text-white text-sm md:text-md lg:text-lg font-semibold mt-2 mb-2 ml-1 md:mb-0 md:mt-0 md:ml-0 px-5 md:px-0">
            <div className="font-light">Get all the latest information on Event, Sales and Offers.</div>
            <div>Receive $10 coupon for first shopping.</div>
          </div>
          <div className="mx-auto md:mx-0">
            <SubscriptionInput />
          </div>
        </div>
      </div>
    </>
  );
}
