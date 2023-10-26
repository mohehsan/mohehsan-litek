import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='flex gap-28 px-28 py-20 w-[77%] mx-auto' id='about'>
        <Image src='/image2.jpg' alt='' width={250} height={50} className='' />
        <div className='space-y-8 font-serif'>
          <h1 className='text-4xl font-bold'>About Me</h1>
          <p>
            I am Muhammad Ikhsan Abdurahman, one of the students from the number 1 private institute in Indonesia, namely the Telkom Purwokerto Institute of Technology or what is usually abbreviated as ITTP. I come from Lampung. I was born in Bandar Lampung, November 30th 2002. I am currently studying Digital Business.
          </p>
        </div>
      </div>
  )
}
