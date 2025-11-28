export default function SortBy() {
    return (
        <div className="flex">
            <span className="mr-1 inline-block text-base/10">Sort By</span>
            <div className="border p-2  border-gray-200">
                <select className="pr-2 border-none outline-none">
                    <option>Sort By popularity</option>
                    <option>Sort By average rating</option>
                    <option>Sort By latest</option>
                    <option>Sort By price: low to high</option>
                    <option>Sort By price: high to low</option>

                </select>
            </div>
        </div>
    )
}