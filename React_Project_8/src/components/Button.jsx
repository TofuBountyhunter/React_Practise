import React from 'react'

const Button = ({className,children, onClick}) => {
    const classes =`border transition duration-300 linear max-w-auto text-center px-4 py-2 mt-4 bg-blue-900 text-white rounded-sm hover:scale-105 ${className || ""}`
    
    const customButton =() =>(
        <button className={classes}>
            {children}
        </button>
    )
    return customButton();
}

export default Button