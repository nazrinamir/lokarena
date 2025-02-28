import React from 'react'

export default function ButtonPrimary({ children, onClick, className }) {
    return (
        <button onClick={onClick} className={`flex items-center justify-center p-2 text-center font-bold text-black rounded-md bg-[#d4fc5c] ${className}`}>{children}</button>
    )
}
