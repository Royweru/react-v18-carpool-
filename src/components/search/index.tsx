
import React from 'react'
import { Button } from '@mui/material'
import { Search } from 'lucide-react'


export const SearchBar = () => {
  return (
    <>
     <div className=' w-full px-16 grid md:grid-cols-4 gap-3 grid-cols-2'>

<div>
<input 
type="number"
className='w-full p-6 bg-zinc-900 font-serif font-bold text-lg focus:outline-1 focus:outline-yellow-50'
placeholder='Budget...'
/>
</div>

<div>
 <select className='w-full p-6 bg-zinc-900 font-serif font-bold text-lg focus:outline-1 focus:outline-yellow-50 '>
    <option value="" selected>
        Mercedez Benz
    </option>
    <option value="" >
        Audi
    </option>
    <option value="" >
      Lambogini
    </option>
    <option value="" >
       Toyota
    </option>
 </select>
</div>

<div>
 <select className='w-full p-6 bg-zinc-900 font-serif font-bold text-lg focus:outline-1 focus:outline-yellow-50 '>
    <option value="" selected>
        Sedan
    </option>
    <option value="" >
        SUV
    </option>
    <option value="" >
      wagon
    </option>
    <option value="" >
       pick-up
    </option>
 </select>
</div>


<div>
 <select className='w-full p-6 bg-zinc-900 font-serif font-bold text-lg focus:outline-1 focus:outline-yellow-50 '>
    <option value="" selected>
        Cayyene
    </option>
    <option value="" >
        RS5
    </option>
    <option value="" >
        Venator
    </option>
    <option value="" >
       Pallasade
    </option>
 </select>
</div>

</div>
<div className=' w-full p-12 flex justify-center'>
 <button className='
  p-3 hover:cursor-pointer hover:bg-white bg-transparent  font-bold px-12 text-blue-200
 '>
    <Search className=' w-12 h-12'/>
 </button>
</div>
    </>
   
  )
}
