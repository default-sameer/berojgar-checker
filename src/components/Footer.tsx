
import React from 'react'
import {FiGithub} from 'react-icons/fi'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
        <footer className='flex justify-between items-center p-5 text-white'>
                <div>
                    <h1>
                        All rights Reserved
                    </h1>
                </div>
                <div>
                    <Link href={`https://github.com/default-sameer/berojgar-checker`}>
                        <a target={`_blank`}>
                            <FiGithub size={23} />
                        </a>
                    </Link>
                </div>
        </footer>
    </>
  )
}

export default Footer