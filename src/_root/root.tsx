
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SwipeCarousel } from "@/components/slides/swipe-carousel";
import { Latest } from "@/components/latest";
import {VideoBackground} from "@/components/video-bg";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
export const Root = () => {
  return (
    <div className="  w-full h-full">
      <Hero />
      <About />
      <div className=" w-full flex flex-col gap-y-3">
        <h1 className=" font-bold text-4xl text-center underline text-rose-400 font-mono ">
          Featured ✨✨✨🔥..
        </h1>
        <SwipeCarousel />
      </div>
      <Latest />
      <VideoBackground />
      <Testimonials />

      <Footer />
   
    </div>
  );
};
