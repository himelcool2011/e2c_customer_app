import { ChevronDown } from "lucide-react"
export default function TopMenu() {
    return (
        <>
            <ul className="flex text-sm  font-semibold text-gray-900 cursor-pointer ml-2">
                <li className="ml-2 transition px-5 pt-4 pb-5  duration-250 hover:text-header">Home</li>
                <li className="ml-2 transition px-5 pt-4 pb-5  duration-250 hover:text-header">Vendor <ChevronDown size={12} className="inline" /></li>
                <li className="ml-2 transition px-5 pt-4 pb-5  duration-250 hover:text-header">Categories <ChevronDown size={12} className="inline" /></li>
                <li className="ml-2 transition px-5 pt-4 pb-5  duration-250 hover:text-header">Products <ChevronDown size={12} className="inline" /></li>
                <li className="ml-2 transition px-5 pt-4 pb-5  duration-250 hover:text-header">Blog</li>
                <li className="ml-2 transition px-5 pt-4 pb-5  duration-250 hover:text-header">Features <ChevronDown size={12} className="inline" /></li>

            </ul>
        </>
    )
}