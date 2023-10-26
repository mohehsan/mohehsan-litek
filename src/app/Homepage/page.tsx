import React from 'react'
import Skill from '@/components/Skill/page'
import About from '@/components/About/page'
import Header from '@/components/Header/page'
import Univ from '@/components/Univ/page'
import Task from '@/components/Task/page'
import Footer from '@/components/Footer/page'

export default function Homepage() {
  return (
    <div>
      <Header />
      <About />
      <Skill />
      <Univ />
      <Task />
      <Footer />
    </div>
  )
}
