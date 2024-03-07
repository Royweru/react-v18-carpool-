import React from 'react'

import { CarCard } from './ui/car-card'
import { whips } from '@/data/cars'
import { Header } from './ui/header'

export const Latest = () => {
    
  return (
    <div className=' w-full py-6 flex flex-col bg-slate-200' id="latest">
        <Header title='Our Latest Collection ' desc='The most recent car collection'/>
   <section className=' w-full grid  px-4 md:grid-cols-2 md:px-6  gap-4'>
       {whips.map(whip=>(
        <CarCard key={whip.id} data={whip} />
       ))}
    </section>
    </div>
  )
}
