import React from 'react'
import Link from 'next/link'

export default function Button({ children = 'any', link = 'any' }) {
    return (
        <div>
            <a href={link}>
                <button className='bg-blue-700 hover:bg-blue-500 rounded-lg px-5 py-2'>{children}</button>
            </a>
        </div>
    )
}
