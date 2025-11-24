export default function CategoryBanner() {
  return (
    <>
      <div
        className="flex flex-col bg-[#f4f4f4] m-5
  md:flex-row md:p-4 md:mx-auto md:justify-center md:items-center
  lg:p-4 lg:mx-auto lg:justify-center lg:items-center
  items-center"
      >
        <div className="flex flex-col px-2 py-4 md:text-right">
          <div className="text-[#222529] font-black">
            <h1 className="text-4xl pl-6 pt-6 "> SMART </h1>
          </div>

          <div className="flex flex-row text-3xl text-[#222529] font-bold md:flex-col lg:flex-row">
            <h1 className="pl-6"> PHONE </h1>
            <h1 className="pl-4"> DEALS </h1>
          </div>
        </div>

        <div className="flex md:w-[40%] lg:w-[40%] justify-center items-center">
          <img
            src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2019/06/shop22_shop_banner.jpg"
            alt="Category Banner"
          />
        </div>

        <div>
          <div className="flex flex-col items-left text-center my-6">
            <h1 className="flex transform -rotate-3 text-white text-dm font-extrabold bg-[#222529] mx-4 px-4 w-fit p-2">
              Exclusive COUPON
            </h1>
            <div className="flex flec-row mt-2 gap-0.5">
              <p className="flex mt-3 -rotate-90 text-[10px] text-[#76787a] font-bold ml-4 mb-0">
                UPTO
              </p>
              <p className="flex transform -rotate-3  text-white text-lg font-black bg-[#222529] p-2 w-fit">
                $100
              </p>
              <p className="text-[#222529] text-[13px] font-extrabold mt-6 ml-2">
                OFF
              </p>
            </div>
          </div>

          <div className="text-red-500 bg-white w-fit mx-4 px-6 py-4 mb-6 font-extrabold text-xs">
            <button>VIEW ALL NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}
