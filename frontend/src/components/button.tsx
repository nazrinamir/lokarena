import React from 'react'

export default function Button({ children, onClick, className }: { children: React.ReactNode, onClick: () => void, className?: string }) {
    return (
        <button onClick={onClick} className={`bg-blue-500 text-white px-4 py-2 rounded-md ${className}`}>{children}</button>
    )
}
