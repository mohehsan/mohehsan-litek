import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div className='w-full fixed bg-blue-900 shadow-2xl'>
        <div className='flex gap-28 justify-between px-96 py-5 items-center'>
          <Link href="/" className='font-serif text-blue-100 hover:text-blue-500 duration-300 focus:bg-blue-400 focus:px-4 focus:rounded-lg'>HOME</Link>
          <Link href="#about" className='font-serif text-blue-100 hover:text-blue-500 duration-300 focus:bg-blue-400 focus:px-4 focus:rounded-lg'>ABOUT ME</Link>
          <Link href="#university" className='font-serif text-blue-100 hover:text-blue-500 duration-300 focus:bg-blue-400 focus:px-4 focus:rounded-lg'>UNIVERSITY</Link>
          <Link href="#task" className='font-serif text-blue-100 hover:text-blue-500 duration-300 focus:bg-blue-400 focus:px-4 focus:rounded-lg'>TASK</Link>
        </div>
      </div>
    </div>
  )
}
