import Subscription from "./subscription";

export default function NewsletterSubscription() {
  return (
    <>
      <div
        className="bg-[#01abec] text-white py-6 px-6
        flex"
      >
        {/* Item 1 */}
        <div className="text-[18px] font-extrabold md:text-[28px]">
          <h1>Sign Up to Newsletter</h1>
        </div>

        {/* Item 2 */}
        <div className="text-md">
          <p>Get all the latest information on Event, Sales and Offers</p>
          <p className="font-bold">Receive $10 coupon for first shopping.</p>
        </div>

        {/* Item 3 (Subscription Component) */}
        <div className="w-full py-4 md:col-span-2 xl:col-span-1">
          <Subscription />
        </div>
      </div>
    </>
  );
}
