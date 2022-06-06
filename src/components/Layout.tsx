import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
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