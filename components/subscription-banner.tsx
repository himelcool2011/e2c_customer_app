import SubscriptionInput from "./subscription-input";

export default function SubscriptionBanner() {
  return (
    <div className="bg-header  pt-5 pb-5">
      <div className="container mx-auto flex flex-col lg:flex-row  items-start md:items-center text-left  ">
        <div className="flex flex-col md:px-5 md:flex-row md:w-full md:justify-between">
          <span className="text-white font-semibold ml-1 px-5 md:ml-0 md:px-0  text-md md:text-lg lg:text-md 2xl:text-2xl ">
            Sign Up to Newsletter
          </span>
          <div className="text-white text-sm md:text-md lg:text-lg font-semibold mt-2 mb-2 ml-1 md:mb-0 md:mt-0 md:ml-0 px-5 md:px-0">
            <div className="font-light">
              Get all the latest information on Event, Sales and Offers.
            </div>
            <div className="text-lg">
              Receive $10 coupon for first shopping.
            </div>
          </div>
        </div>
        <div className="w-full px-4 mt-2">
          <SubscriptionInput />
        </div>
      </div>
    </div>
  );
}
