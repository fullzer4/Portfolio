import Navbar from '@/components/navbar'
import Home from '@/components/home'
import { NextComponentType } from 'next'

const Page: NextComponentType = () => {
  return (
    <main>
      <Home/>
      <Navbar/>
    </main>
  )
}

export default Page
