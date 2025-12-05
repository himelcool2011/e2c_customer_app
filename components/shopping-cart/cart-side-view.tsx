'use client'
import Product from "@/interfaces/product";
import CartItem from "./cart-item";
import { useAppDispatch, useAppSelector } from "@/stores/hook";
import { closeCart } from "@/stores/slices/cart-slice";

export default function CartSideView() {

  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(closeCart())
  }

  const products: Product[] = useAppSelector((state) => state.cartReducer.items);
  const subTotal:number = useAppSelector((state)=>state.cartReducer.subTotal);
  if (!useAppSelector((state) => state.cartReducer.show)) return null
  return (
    // <div className=" fixed bg-veil backdrop-blur-sm z-15 block w-full h-full top-0 left-0 " onClick={close}>
      <div className="fixed shadow-sm z-16 bg-white h-full w-[90%] md:w-80 top-0 right-0  px-5 py-7 opacity-100">
        <div className="flex justify-between font-bold mb-3">
          <span>{products.length} ITEMS</span>
          <a href="#">VIEW CART</a>
        </div>
        <div className="h-[86%] md:h-[80%] scrollbar xl:h-[80%] 2xl:h-[85%] border-t border-b border-gray-200 block overflow-x-hidden overflow-y-auto">
          {
            products.map(p => {
              return <CartItem key={p.name+p.id} product={p} />
            }
          )}

        </div>
        <div className="flex justify-between mt-3 mb-4 font-bold">
          <span>SUB TOTAL:</span>
          <span>{subTotal.toFixed(2)||0.00}</span>
        </div>
        <div className="bg-fade-black p-3 text-center hover:bg-fade-black-hover transition duration-250  text-white " >CHECKOUT</div>
      </div>
    // </div>
  )
}