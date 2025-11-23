'use client'
import { X } from "lucide-react";
import { useState } from "react";

export default function Modal({   title, children, footer }:any) {
  const [openModal,setOpenModal] = useState(true)
  const onClose = ()=>{
    setOpenModal(false)
  }

  if(!openModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Veil */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white bg-neutral-900 rounded-2xl shadow-xl w-[90%] max-w-md p-4 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-100 cursor-pointer transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="mb-5">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex justify-end gap-2 pt-3 border-t border-neutral-200 dark:border-neutral-800">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
