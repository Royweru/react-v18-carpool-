
import { Header } from './ui/header'

export const Testimonials = () => {
    const testimonials =[
        {id:1,
         content:"yooyoyooyotot"
        },
           {id:1,
         content:"yooyoyooyotot"
        },
        {id:1,
            content:"yooyoyooyotot"
           },

           {id:1,
            content:"yooyoyooyotot"
           },
           {id:1,
            content:"yooyoyooyotot"
           },
           {id:1,
            content:"yooyoyooyotot"
           },
    ]
  return (
    <div className=' w-full py-3 bg-gradient-to-tr from-blue-950 via-black to-slate-950 flex flex-col gap-y-2 '>
        <Header title=' What our clients have to say 🤗🤗' />
<section className=' grid grid-cols-2 md:grid-cols-4 gap-4 px-4 '>
   {testimonials.map(testimonial=>(
    <div className="relative flex w-full col-span-1 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none" key={testimonial.id}>
    <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        alt="tania andrew"
        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
      />
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Tania Andrew
          </h5>
         
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
          Frontend Lead @ Google
        </p>
      </div>
    </div>
    <div className="mb-6 p-0">
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        "I found solution to all my design needs from Creative Tim. I use them
        as a freelancer in my hobby projects for fun! And its really affordable,
        very humble guys !!!"
      </p>
    </div>
  </div>
   ))}
</section>



    </div>
  )
}
