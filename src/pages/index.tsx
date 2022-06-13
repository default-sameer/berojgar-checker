import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Names from '@/components/Names'

const Home: NextPage = () => {
  return (
    <>
    <NextSeo title='Berojgar Checker' description='Berojgar Checker' />
      <div className='flex justify-center items-center flex-col mx-auto'>
          <h1 className='text-4xl md:text-7xl'>Berojgar Checker</h1>
          <p className='text-xl p-5'>Check if Your Friend is Berojgar or .... ?</p>
           <Names placeholder={`Search Friends`} />
      </div>
    </>
  )
}
 
export default Home
