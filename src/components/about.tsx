import React from 'react'

export const About = () => {
  return (
    <div className=' w-full flex bg-gradient-to-br justify-evenly from-zinc-900 via-slate-900 to-black mt-4 py-6 mb-4 ' id='about'>
         
         <div className=' w-2/5 p-1'>
           <p className=' font-bold font-serif text-xl text-rose-200 first-letter:capitalize first-letter:drop-shadow-2xl tracking-wide'>
                 We are an automotive business that is driven by car production and the best vehicles and categories on the world
                  we are selected as the best in the industry and the best overall it is crazy and it is the best welcome to the best 
                  we are alll welcome to the grand opening of car pool
           </p>
         </div>
        <div className="p-3 bg-[url('/images/slide1.jpeg')] h-[400px] w-2/5 bg-center bg-cover rounded"/>
        </div>
  )
}
