import React from 'react'
import Header from './Header'
import Footer from './Footer'


interface Props{
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
    <div className='flex flex-col h-screen text-white'>
        <Header />
        <main className='grow flex justify-center items-center'> 
          {children} 
        </main>
        <Footer />
    </div>
    </>
  )
}

export default Layout