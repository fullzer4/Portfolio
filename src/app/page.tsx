import Navbar from '@/components/navbar'
import Home from '@/components/home'
import { NextComponentType } from 'next'
import Image from 'next/image'

const Page: NextComponentType = () => {
  return (
    <main>
      <Home/>
      <Navbar/>
    </main>
  )
}

export default Page
