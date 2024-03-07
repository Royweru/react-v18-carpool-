
import { NavBar } from '../navigation/navbar'
import { SearchBar } from '../search'

export const Hero = () => {
  return (
    <div className="w-full h-[600px] bg-[url('/images/hero-bg.jpeg')] overflow-hidden flex flex-col items-center justify-between py-6 bg-cover bg-center">
         <NavBar />
         <SearchBar />
    </div>
  )
}
