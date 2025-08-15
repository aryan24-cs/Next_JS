import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-blue-800 mb-10 justify-between items-center px-6 py-3 text-2xl'>
      <h3>Skill Shastra</h3>
      <div className='flex gap-7'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/product'>Product</Link>
        <Link href='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
