import React from 'react'
import { NavBar } from '../navigation/navbar'

export const Hero = () => {
  return (
    <div className="w-full h-[600px] bg-[url('/images/hero-bg.jpeg')] overflow-hidden flex flex-col py-6 bg-cover bg-center">
         <NavBar />
    </div>
  )
}
