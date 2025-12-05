'use client'
import Product from "@/interfaces/product";
import { useAppDispatch } from "@/stores/hook";
import { addToCart, calculate } from "@/stores/slices/cart-slice";
import { show } from "@/stores/slices/modal-slice";
import { ArrowUpRightFromSquare, ShoppingBasket } from "lucide-react";
import Image from "next/image";

type ProductDetail = {
  size: number
  product: Product
}
export default function ProductCard({ size,product }: ProductDetail) {


  const toPrice = product.price.length > 1 ? product.price[1] : product.price[0];
  const fromPrice = product.price.length > 1 ? product.price[0] : toPrice;
  console.log(product.id, toPrice, fromPrice)
  const currencySymbol = product.currency;
  const discountPrice = product.discount
  const tags = product.tags;

  const renderPrice = () => {
    if (discountPrice) {
      return (<div className="text-lg font-bold"><span className="text-gray-400 line-through">{currencySymbol}{toPrice}</span>  {currencySymbol}{toPrice-discountPrice}</div>)
    } else {
      if (fromPrice < toPrice) {
        return (<div className="text-lg font-bold">{currencySymbol}{fromPrice} - {currencySymbol}{toPrice}</div>)
      } else {
        return (<div className="text-lg font-bold text-fade-black">{currencySymbol}{toPrice}</div>)
      }
    }


  }

  const renderTag = ()=>{
    if(discountPrice>0){
      const percent = Math.round((discountPrice/toPrice)*100)
      return <div className="w-10 h-5 bg-red-400 text-white font-semibold text-sm text-center absolute left-2 top-2">-{percent}%</div>
    }
    return <div className="w-10 h-5 bg-green-600 text-white font-semibold text-sm text-center absolute left-2 top-2">Hot</div>;
  }

  const renderCategories = ()=>{
    return tags.map((tag,index)=> (<span key={tag}><a className="hover:text-header"  href="#" >{tag}</a>{ (index < tags.length-1) && (<span>, </span>)}</span>));
  }

  const getStyleOne = (size:any)=>{
    return `bg-veil md:h-[235px] w-[168px] h-[168px] md:w-[235px] absolute right-0 top-0 opacity-0 cursor-pointer transition duration-250 group-hover/product:opacity-100`
  }

  const getQuickViewStyle = (size:any)=>{

    return `bg-fade-black hover:bg-fade-black-hover transition duration-250 w-[168px] md:w-[235px] h-[48px] z-1 flex items-center justify-center text-white absolute right-0 bottom-0` 
  }

  const dispatch =  useAppDispatch()
  const openModal = ()=>{
    dispatch(show())
  }


  const handleAddToCart= (product:Product)=>{
    dispatch(addToCart(product))
    dispatch(calculate())
  }

  return (
    <>
      <div className="product group/product mb-8 last:gap-x-0">
        <div className="border-1 border-gray-200 relative">
          {renderTag()}
          <a href="#">
            <div className="relative w-[168px] h-[168px] md:w-[235px] md:h-[235px]">
            <Image alt="p1" loading="eager" className="border-none object-cover" fill  src={product?.url} />
            </div>
          </a>

          <div className={getStyleOne(size)}>
            <div className="absolute group/addtocart right-4 top-4">

              <span
                className="absolute left-1/2 -translate-x-1/2 mb-2 bottom-full w-max max-w-xs px-3 py-2 text-xs text-white bg-fade-black opacity-0 group-hover/addtocart:opacity-100 transition-opacity duration-350"
              >
                ADD TO CART
                <div
                  className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-gray-800"
                ></div>
              </span>

              <div className="bg-white text-black transition duration-200 group-hover/addtocart:bg-fade-black group-hover/addtocart:text-white w-10 h-10 rounded-full flex items-center justify-center">
              { !(product.price.length > 1)?
              <button type="button" className="cursor-pointer p-5"  onClick={()=>{handleAddToCart(product)}}><ShoppingBasket /></button>
                :
                <a href="#"><ArrowUpRightFromSquare/></a>
            }</div>
            </div>
            <div className={getQuickViewStyle(size)} onClick={()=>openModal()}>QUICK VIEW</div>
          </div>
        </div>
        <div className="pt-2 ">
          <span className="text-tiny font-light text-gray-400">{renderCategories()}</span>
          <h3>{product?.name}</h3>
          <div className="flex">
            {renderPrice()}
          </div>
        </div>
      </div>
    </>
  );
}