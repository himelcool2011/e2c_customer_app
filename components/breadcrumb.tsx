import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb(){
    return (
        <>
        <div className="container mx-auto px-3 md:px-0 py-3">
            <ul className="flex items-center">
                <li><Home className="text-gray-500" size={16} strokeWidth={1}/></li>
                <li><ChevronRight  className="inline text-gray-500" size={16} strokeWidth={1}/></li>
                <li><span className="text-xs text-gray-400">Shop</span></li>
            </ul>
        </div>
        </>
    );
}