import React from 'react'
import Button from '../Button/page'

export default function Header() {
  return (
    <div>
      <div className='flex bg-image1 bg-cover'>
        <div className='w-[85%] mx-auto text-left pb-48 pt-60 px-28 space-y-3'>
          <h1 className='font-bold text-4xl font-serif'>HI FOLKS, I'AM</h1>
          <h1 className='font-bold text-4xl font-serif'>MUHAMMAD IKHSAN ABDURAHMAN</h1>
          <p className='opacity-50'>DIGITAL BUSINESS COLLEGE STUDENT</p>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}
