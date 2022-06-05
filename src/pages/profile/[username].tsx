import React from 'react'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'

interface profile{
    username: string
}


const Profile = ({username}: profile) => {
  return (
      <>
      <NextSeo title={username} description={username} />
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>Hey: <span className='font-bold'> {username} </span></h1>
        <p className='p-2'>Your profile be Here Soon</p>
      </div>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const username = context.query.username as string
  return {
    props: {
        username
    },
  };
};

export default Profile