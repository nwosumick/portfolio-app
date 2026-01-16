"use client";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect"


const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">

      <div className="relative z-10 flex flex-col items-center">
          <Image src="/images/A5.jpeg" alt="heroimage" width={150} height={150} className="rounded-full border-8 border-white mb-6"
          data-aos="fade-up"/>
          <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>Developing scalable web products, <br /> brands, <span className="text-cyan-200">and digital experiences.</span></h1>
          <h2 data-aos="fade-up" data-aos-delay="400" className="mt-5 text-sm px-2 text-center sm:text sm:text-2xl font-medium flex items-center">
            Hello! I'm Michael-A Dedicated 
            <span className="text-cyan-200 font-bold">
               <Typewriter 
               options={{
                  strings: [
                    " Frontend Developer",
                    " Web Developer",    
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: 'pl-2'
               }}
               />   
            </span>
          </h2>
         <button data-aos="fade-up" data-aos-delay="600" className="mt-6 px-10 py-4 bg-blue-800 text-lg font-medium cursor-pointer rounded-full hover:bg-blue-900 transition-all duration-300">
            <span>See my work</span>
            <BsArrowRight className="w-5 h-5 ml-2 inline-block"/>
         </button>   
      </div>
    </div>
  )
}

export default Hero