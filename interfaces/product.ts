export default interface Product {
  id:Number,
  name: string,
  url: string
  tags: string[],
  price: number[],
  currency: string,
  discount: number
}