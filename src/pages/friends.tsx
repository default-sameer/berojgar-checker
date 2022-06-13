import React from 'react'
import { GetServerSideProps } from 'next'
import prisma from '@/lib/prisma'
import { Friend } from '@/utils/types'
import Image from 'next/image'


const Friends : React.FC<{friends: Friend[]}> = ({friends}) => {
  return (
    <>
        <div className='flex justify-center items-center mx-auto bg-gray-300'>
            <div className='relative px-4 py-10 mx-auto md:px-24 lg:px-8 lg:py-20'>
              <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                {/* svg */}
              </div>
              <div className="relative grid gap-5 sm:gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {friends.map((friend) => 
                  <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:cursor-pointer">
                    <div className="p-5 flex itmes justify-center flex-col">
                      <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                        <Image src={`${friend.image ? `${friend.image}` : 'https://sheqkeglajhqabagphfv.supabase.co/storage/v1/object/public/berojgar-checker/berojgar.png'}`} alt="avatar" className="w-full h-full rounded-full object-contain" height={150} width={150}/>
                      </div>
                      <p className="mb-2 font-bold">{friend.name}</p>
                      <p className="text-sm text-gray-900">
                        {friend.jobStatus === 'employed' ? <span className="text-green-500">Employed</span> : <span className="text-red-500">Jobless</span>}
                      </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                  </div>
                )}      
              </div>
            </div>

        </div>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const friends = await prisma.friends.findMany({
    orderBy: {
        createdAt: 'asc'
      }
  })
  
  return {
    props: {
      friends: JSON.parse(JSON.stringify(friends))
    },
  };
};

export default Friends