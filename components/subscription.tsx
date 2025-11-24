export default function SubscriptionInput() {
  return (
    <>
      <div>
        <form className="flex py-2 w-full max-w-full">
          <input
            type="text"
            placeholder="Enter your Email address..."
            className="bg-white rounded-l-full text-black py-4 px-6 text-dm
                 w-full 
                 sm:w-40 
                 md:w-3/4   
                 lg:w-3/4
                 xl:w-64"
          />
          <button
            type="submit"
            className="bg-[#222529] text-white font-bold text-dm rounded-r-full
                 py-4 px-4
                 w-auto
                 sm:w-20 
                 md:w-1/4
                 lg:w-1/4 
                 xl:w-36"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </>
  );
}
