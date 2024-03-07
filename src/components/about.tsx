

export const About = () => {

  const aboutContent=[
    {id:1,
     title:"Best Repair services",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     img:"/images/wy1.jpg"
    },
    {id:2,
      title:"Top car seller internationaly",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img:"/images/why2.jpg"
     },
     {id:3,
      title:"Top notch mechanics",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img:"/images/why3.jpg"
     },
  ]
  return (
    <div className=' w-full flex bg-gradient-to-br justify-evenly from-zinc-900 via-slate-900 to-black mt-4 py-6 mb-4 ' id='about'>
         
         <div className=' md:w-4/5 w-full  py-4 flex flex-col gap-4'>
          {aboutContent.map(content=>(
              <div className=" flex justify-evenly p-2 bg-neutral-900 rounded-lg" key={content.id}>
              <div className="w-full">
               <img src={content.img} alt="" className=" w-full h-[200px] rounded" />
              </div>
              <div className=" flex flex-col gap-y-3">
               <h1 className=" font-bold text-2xl text-white font-serif italic">
                 {content.title}
               </h1>
               <p className=" text-sm font-thin text-zinc-300 font-serif">
                 {content.description}
               </p>
              </div>
         </div>
          ))}
           
         </div>
        <div className="p-3 bg-[url('/images/slide1.jpeg')] h-[400px] md:block hidden  md:w-1/5 bg-center bg-cover rounded"/>
        </div>
  )
}
