"use client";
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
         if (window.scrollY > 300) setIsVisible(true);
         else setIsVisible(false); 
    };
    window.addEventListener("scroll", toggleVisibility);
      return () =>window.removeEventListener("scroll", toggleVisibility)
}, []);

// Scroll to top function
const ScrollToTop = () => {
      window.scrollTo({
            top: 0,
            behavior: "smooth"        
      })
}
  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {isVisible && (
            <button onClick={ScrollToTop} className="bg-blue-500 hover:bg-blue-900/60 cursor-pointer w-12 h-12 flex items-center justify-center text-white focus:outline-none rounded-full">
               <FaArrowUp />   
             </button>     
      )}
    </div>
  )
}

export default ScrollToTop