export default function ShowPageNumbers() {
    return (
        <div className="flex">
            <span className="mr-1 inline-block text-base/10">Show: </span>
            <div className="border p-2  border-gray-200">
                <select className="pr-2 border-none outline-none">
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                    

                </select>
            </div>
        </div>
    )
}