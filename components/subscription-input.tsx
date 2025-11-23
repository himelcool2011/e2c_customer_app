export default function SubscriptionInput() {
    return (
        <>
            <div className="flex items-center rounded-full bg-white  overflow-hidden">
                <input name="subscription_mail" type="text" placeholder="Enter your Email address..." className="caret-gray-500  text-gray-500 placeholder-gray-400 text-md p-1  outline-none ml-4 w-2/4 md:w-3/4" />
                <button className="cursor-pointer outline-none bg-fade-black flex font-semibold text-sm items-center px-6 transition duration-250 text-white justify-center hover:bg-gray-600 text-gray-500 w-2/4 h-[48px]" type="button">
                    SUBSCRIBE
                </button>
            </div>
        </>
    );
}