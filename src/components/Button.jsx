import React from 'react'

function Button({ children, className, onClick = () => { } }) {
    return (
        <div className={`relative bg-purple-600 rounded-md w-40 h-13
                group transition border border-purple-600/30 ${className}`}>
            <button className='text-purple-200 bg-gray-900 rounded-md w-full h-full 
                shadow-sm shadow-purple-500 cursor-pointer text-base
                group-hover:-translate-1 transition-all duration-300 text-center'
                onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button