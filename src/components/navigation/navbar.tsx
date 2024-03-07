
import { Link } from "react-router-dom";

export const NavBar = () => {
  const navitems = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Featured",
      href: "#featured",
    },
    {
      label: "Blog",
      href: "#blog",
    },
  ];
  return (
    <div className=" py-2 flex justify-center gap-x-4 w-full bg-transparent font-bold font-mono text-xl text-zinc-800 ">
        <div
            
            className="
                 p-4 
                  bg-transparent
                  hover:bg-slate-300 
                  rounded-3xl 
                  hover:cursor-pointer
                   hover:text-neutral-400 
                   group relative
                  "
          >
            Browse
               <div className="absolute z-10 hidden bg-gray-800 group-hover:block p-6 w-[300px] hover:transition-transform m-3 ">
                <div className=" w-full p-2 font-serif font-bold text-white rounded-xl hover:text-neutral-300 hover:text-3xl active:text-gray-950">
                     <Link to={"/browse/international"}>
                     International Stock
                     </Link>
                    
                </div>
                <div className=" w-full p-2 font-serif font-bold text-white rounded-xl hover:text-neutral-300 hover:text-3xl active:text-gray-950">
                <Link to={"/browse/local"}>
                     Local Stock
                     </Link>
                </div>
                <div className=" w-full p-2 font-serif font-bold text-white rounded-xl hover:text-neutral-300 hover:text-3xl active:text-gray-950">
                    <a href="#latest">
                      Latest Stock
                    </a>
                </div>
                <hr className=" w-full my-1 text-white " />
                <div className=" w-full p-2 font-serif font-bold text-white rounded-xl hover:text-neutral-300 hover:text-3xl active:text-gray-950">
                     All of our cars
                </div>
              </div>
          </div>
      {navitems.map((navitem) => (
        <a href={navitem.href}>
            <div
            id={navitem.href}
            className="
                 p-4 
                  bg-transparent
                  hover:bg-slate-300 
                  rounded-3xl 
                  hover:cursor-pointer
                   hover:text-neutral-400 
                  "
          >
            {navitem.label}
          </div>
        </a>
      
        
      ))}
    </div>
  );
};
