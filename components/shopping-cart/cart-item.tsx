import Image from "next/image";
export default function CartItem({product}:any){
    return (
        <div className="flex justify-between border-t border-gray-200 pt-2 pb-2">
              <div className="flex flex-col justify-between">
                <div>
                  <h3>{product.name}</h3>
                  <span>Store: {product.vendor}</span>
                </div>
                <span>1 x ${product.price[0].toFixed(2)}</span>
              </div>
              <div>
                <Image alt="" width={80} height={80} src={product.url} />
              </div>
            </div>
    )
}