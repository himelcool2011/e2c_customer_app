'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import Menu from "./menu";
import { useEffect, useRef, useState } from "react";

export default function MenuItem({ menuItem, onToggle }: any) {
const [cheight,setCheight] = useState('0px');
    let [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null);

useEffect(()=>{
       if(isOpen){
            const scrollHeight = ref.current?.scrollHeight || 0;
            setCheight(scrollHeight+'px');
            
       }else{
            setCheight('0px');
       }

    },[isOpen,cheight])
    const renderButton = () => {

        if (menuItem.children.length > 0 && !isOpen)
            return (<ChevronDown className="inline" size={18} onClick={() => {

                setIsOpen(!isOpen)
                

            }
            }
            />)

        if (menuItem.children.length > 0 && isOpen)
            return (<ChevronUp className="inline" size={18} onClick={() => {
                setIsOpen(!isOpen)
                
                
                 
                }} />)
    }
    return (
        <li >
            <div className="flex justify-between"><span className="text-sm text-gray-400 font-semibold"><a href="#" className="hover:text-fade-black transition duration-150 pr-2">{menuItem.name}</a>
            {menuItem.children.length>0 && (<span>({menuItem.children.length})</span>)}
            </span>
               <span className="w-6 h-6 text-center"> {renderButton()}</span>
            </div>
            {
                (<div ref={ref} style={{maxHeight:cheight, transition:'max-height 150ms ease'}} className="overflow-hidden pl-3 text-sm text-gray-400 font-semibold"><Menu menus={menuItem.children} /></div>)
            }
        </li>

    )
}