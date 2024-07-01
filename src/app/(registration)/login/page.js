import Blueside from '@/components/LoginPage/Blueside'
import Whiteside from '@/components/LoginPage/Whiteside'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-royal h-3/4 md:h-screen lg:h-screen md:w-[50%]' >
    <Blueside/>
    </div>
    <div className='h-1/2 md:h-[80%] lg:h-screen md:w-[50%] p-4'>
    <Whiteside/>
    </div>
      
    </>
  )
}

export default page
