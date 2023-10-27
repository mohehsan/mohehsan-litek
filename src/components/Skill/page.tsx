import React from 'react'
import { FaBusinessTime, FaCode } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'

export default function Skill() {
  return (
    <div>
      <div className='bg-gray-500 mb-8'>
        <div className='flex justify-between w-[65%] mx-auto py-10'>
          <div className='space-y-3'>
            <FaCode className="text-7xl mx-auto" />
            <p>Web Developer</p>
          </div>
          <div className='space-y-3'>
            <FaBusinessTime className="text-7xl mx-auto" />
            <p>Businessman</p>
          </div>
          <div className='space-y-3'>
            <IoIosSchool className="text-7xl mx-auto" />
            <p>College Student</p>
          </div>
        </div>
      </div>
    </div>
  )
}
