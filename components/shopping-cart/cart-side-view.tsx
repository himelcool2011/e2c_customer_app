import Product from "@/interfaces/product";
import CartItem from "./cart-item";

export default function CartSideView({products}:{products:Product[]}){
    return (
        <div className="hidden fixed bg-veil backdrop-blur-sm z-15 block w-full h-full top-0 left-0 ">
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
    )
}