import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import  {Toaster} from 'react-hot-toast'


interface Props{
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
    <div className='flex flex-col h-screen'>
        <Toaster />
        <NavBar />
        <main className='grow flex justify-center items-center text-white'> 
          {children} 
        </main>
        <Footer />
    </div>
    </>
  )
}

export default Layout