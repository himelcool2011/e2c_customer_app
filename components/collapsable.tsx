'use client'
import { Minus, Plus } from "lucide-react";
import { cloneElement, ReactNode, useEffect, useRef, useState } from "react";

type CollapsableType={
    title: string,
    children:  React.ReactNode
}

export default function Collapsable({title, children}: CollapsableType){
    const ref= useRef<HTMLDivElement>(null);
    const [height,setHeight] = useState('0px');
    const [open, setOpen] = useState(false);

    const normalized = Array.isArray(children) ? children : [children];
    useEffect(()=>{
       if(open){
            const scrollHeight = ref.current?.scrollHeight || 480;
            setHeight(scrollHeight+'px');
       }else{
            setHeight('0px');
       }

    },[open,height])

    const renderToggleButton = ()=>{
        if(open){
            return (<Minus className="inline "/>)
        }
        return (<Plus className="inline"/>)
    }

    

    return (
        
        <aside className="pb-4 mb-2 border-b-1 border-gray-200">
            <h3 className="flex h-[30px] text-base/8  justify-between font-bold text-fade-black"><span >{title} </span>
                <span className="cursor-pointer" onClick={()=>{
                    setOpen(!open);
                    
                }}>{renderToggleButton()}</span>
            </h3>  
            <section className="overflow-y-hidden transition-all duration-250 ease-in-out" style={{maxHeight:height}} >{children}</section>
        </aside>
       
    )
}