import React from 'react'

const Button = ({onClick, text, disabled}) => {
  return (
    <>
        <button type='submit' className='relative inline-block group focus:outline-none' onClick={onClick} disabled={disabled}>
            <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current text-black">
              {text}
            </span>
        </button>
    </>
  )
}

export default Button