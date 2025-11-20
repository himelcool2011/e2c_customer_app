'use client'
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('Music');
    const [options, setOptions] = useState(['All Categories','Music','Gifts','Electronics','Fashion','Trouses']);
    return (
        <>
            <div className="flex items-center rounded-full bg-white  md:basis-142">
                <input name="search" type="text" placeholder="I am searching for..." className="caret-gray-500  text-gray-500 placeholder-gray-400 text-md p-1  outline-none ml-4 w-30 md:w-88" />
                <div className="hidden md:block text-base/12 min-w-32 z-100   relative   pl-2 text-gray-500  border-x-1 border-gray-200 h-12 cursor-pointer">
                    <span className="text-sm flex items-center h-[48px] justify-between pr-2 gap-x-0" onClick={() => setOpen(!open)}><span className="inline-block text-ellipsis overflow-hidden whitespace-nowrap w-30">{selected}</span> <ChevronDown size={12} className="inline" /></span>
                    {
                        open && (<div className="absolute -right-0.5 top-10 mt-2 w-32 bg-white border-t-1 border-gray-200   shadow-xl ">
                            <ul className="text-xs text-gray-500">
                                {   (options) && (
                                    options.map((o,i)=>{
                                        return (<li key={o} className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={()=>{
                                            setSelected(o)
                                            setOpen(!open)
                                        }}>
                                        {o}
                                    </li>)
                                    }) 
                                )
                                }
                               
                            </ul>
                        </div>)
                    }
                </div>
                <button className="cursor-pointer outline-none bg-white flex items-center rounded-full  justify-center w-18 text-gray-500 h-[48px]" type="button">
                    <Search strokeWidth={1.5} />
                </button>
            </div>
        </>
    );
}