import Product from "./product";

export interface CartInitState{
    show:boolean,
    items:Product[],
    subTotal:number
}