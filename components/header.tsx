'use client'
import { HeartIcon, Menu, ShoppingCart, UserRound } from "lucide-react";
import SearchBar from "./search-bar";
import { useAppDispatch } from "@/stores/hook";
import { showCart } from "@/stores/slices/cart-slice";

export default function Header() {

  const dispatch = useAppDispatch();

  const handleClickOnShoppingCart = ()=>{
    dispatch(showCart())
  }

  return (
    <div className="bg-header h-[84px]">
      <div className="container md:mx-auto">
        <div className="flex items-center h-[84px] justify-between px-3 md:px-0 pt-2 pb-4">
          <div className="flex items-center">
            <Menu className="block md:hidden text-white mr-2" />
            <span className="text-white text-2xl font-semibold">e2c</span>
          </div>
          <SearchBar />
          <div className="flex items-center md:justify-end  md:w-60 gap-x-1 md:gap-x-3 ">
            <span className=" text-white text-md font-semibold ">
              <UserRound className="hidden md:block rounded-full border p-2 border-white w-12 h-12" />
              <UserRound className=" md:hidden  md:p-2 w-8 h-8 md:w-12 md:h-12" />
            </span>
            <div className="hidden md:block text-white text-md font-semibold">
              <div className="font-light">Hello!</div>
              <div>My Account</div>
            </div>
            <span className="">
              <HeartIcon className="text-white w-8 h-8" />
            </span>
            <span>
              <button className="cursor-pointer" type="button" onClick={()=>handleClickOnShoppingCart()}><ShoppingCart className="text-white w-8 h-8"  /></button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
