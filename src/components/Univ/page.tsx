import React from 'react'
import Image from 'next/image'

export default function Univ() {
  return (
    <div>
      <div className='w-[65%] mx-auto' id='university'>
        <h1 className='font-bold text-5xl font-serif mb-5 pt-20'>About University</h1>
        <div className='space-y-8'>
          <div className='flex gap-28'>
            <Image src="/telkom.jpg" alt='' width={500} height={100} />
            <p className='text-justify'>ITTP atau Istitut Teknologi Telkom Purwokerto adalah salah satu perguruan tinggi yang ada di Purwokerto. ITTP juga saat ini menempati peringkat pertama sebagai Institut swasta terbaik di Indonesia.Sebelumnya menjadi Institut, Perguruan Tinggi ini bernama ST3 Telkom Purwokerto. Barulah pada tahun 2017 Perguruan tinggi ini berubah status menjadi Institut. Maka jadilah Institut Teknologi Telkom Purwokerto.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
