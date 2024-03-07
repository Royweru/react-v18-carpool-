import React from 'react'

interface HeaderProps{
    title:string,
    desc?:string
}
export const Header = ({
    title,
    desc
}:HeaderProps) => {
  return (
    <div className=' w-full text-center flex flex-col font-mono text-4xl text-rose-400 gap-y-3 font-semibold'>
         <h1>
            {title}
         </h1>
         <p className=' font-serif text-sm font-bold text-black'>
            {desc}
         </p>
    </div>
  )
}
