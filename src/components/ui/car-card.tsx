import React from 'react'
interface CarCardProps{
  data:any
}
export const CarCard = ({data}:CarCardProps) => {
  return (
    <div className=' col-span-1 rounded shadow-md relative'>
        <div className=' flex flex-col  w-full bg-rose-100 border border-solid border-black p-0 '>
           <div className=' p-0'>
              <img src={data.img} alt="" className=' w-full h-[350px] ' />
           </div>
           <div className=' absolute bottom-2 left-1 flex flex-col'>
           <p className=' font-semibold text-sm text-slate-950'>
               {data.make}
           </p>
           <h2 className=' font-semibold text-sm font-mono italic text-zinc-800'>
            {data.model}
           </h2>
           </div>
           <div className=' absolute right-2 bottom-2 flex justify-evenly gap-x-2'>
                    <div className=' p-4 bg-rose-400 font-sans font-semibold'>
                          {data.mileage}KM
                    </div>
                    <div className=' p-4 bg-rose-400 font-sans font-semibold'>
                          {data.engine}
                    </div>
           </div>
        </div>
    </div>
  )
}
