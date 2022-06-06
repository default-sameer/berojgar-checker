import React from 'react'
import Names from '@/components/Names'
import { NextSeo } from 'next-seo'

const Profilepage = () => {
  return (
    <>
      <NextSeo title='Profile' description='Profile | Berojgar Checker' />
        <div>
            <Names />
        </div>
    </>
  )
}

export default Profilepage