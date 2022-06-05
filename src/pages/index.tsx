import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
    <NextSeo title='Berojgar Checker' description='Berojgar Checker' />
      <div className='flex justify-center items-center flex-col'>
          <h1 className='text-7xl'>Berojgar Checker</h1>
          <p className='text-xl p-5'>Comming Soon</p>
      </div>
    </>
  )
}

export default Home
