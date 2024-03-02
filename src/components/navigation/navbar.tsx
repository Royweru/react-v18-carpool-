import React from 'react'

export const NavBar = () => {
    const navitems=[
        {
            label:"Browse",
            href:"#Hero"
        },
        {
            label:"About",
            href:"#about"
        },
        {
            label:"Featured",
            href:"#featured"
        },
        {
            label:"Blog",
            href:"#blog"
        },
       
    ]
  return (
    <div className=' py-2 flex justify-center gap-x-4 w-full bg-transparent font-bold font-mono text-xl text-zinc-800'>
        {navitems.map(
            navitem=>(
                  <div id={navitem.href} 
                  className='
                 p-4  bg-transparent hover:bg-slate-300 rounded-3xl hover:cursor-pointer hover:text-neutral-400 
                  '>
                   {navitem.label}
                  </div>
            )
        )}
    </div>
  )
}
