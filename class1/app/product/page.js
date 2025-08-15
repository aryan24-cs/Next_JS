import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 py-3'>
        <Link href='/product/men'>Mens Collection</Link>
        <Link href='/product/women'>Womens Collection</Link>
      </div>
      <h1 className='text-3xl underline'>
        Product page
      </h1>
    </div>
  )
}

export default page
