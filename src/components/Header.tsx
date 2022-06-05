import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between p-2 '>
            <h1>Berojgar-Checker</h1>
            <div className=''>
                <ul className='flex justify-between'>
                    <li>Home</li>
                </ul>
            </div>

        </nav>
    </>
  )
}

export default Header