import React from 'react'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import prisma from '@/lib/prisma'

interface profile{
    username: string
}


const Profile = ({username}: profile) => {
  return (
      <>
      <NextSeo title={username} description={username} />
      <div className='flex flex-col justify-center items-center mx-auto'>
        <h1 className='text-3xl'>Hey: <span className='font-bold'> {username} </span></h1>
        <p className='p-2'>Your profile be Here Soon</p>
      </div>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const name = context.query.username as string
    const profile = await prisma.friends.findFirst({
      where:{
        name: {
          equals: name
        }
      }
    })
    console.log(profile);
    

    return {
      props: {
          profile : JSON.parse(JSON.stringify(profile))
      },
    };
};

export default Profile