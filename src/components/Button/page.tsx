import React from 'react'
import Link from 'next/link'

export default function Button() {
    return (
        <div>
            <a href="/#about">
                <button className='bg-blue-700 hover:bg-blue-500 rounded-lg px-5 py-2'>About Me</button>
            </a>
        </div>
    )
}
