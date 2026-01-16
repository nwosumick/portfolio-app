import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
       {/* WORK PART */}
       <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-bold text-white">My Work <span className="text-cyan-200">Experience</span>
            </h1>
            <div className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center">
              <ResumeCard Icon={FaReact} role="Front-End Developer" />
              <ResumeCard Icon={BsDatabase} role="Backend Developer" />    
            </div>
       </div>
       {/* EDUCATION PART */}
       <div>
           <h1 className="text-3xl sm:text-4xl font-bold text-bold text-white">My<span className="text-cyan-200"> Education</span>
            </h1>
            <div className="mt-10"
             data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            >
              <ResumeCard 
              Icon={FaReact} 
              role="Bachelor in Social Work"
              date="Jan 2019 - Aug 2025" 
              />
              <ResumeCard Icon={BsDatabase} role="Certificate in Digital Marketing"
              date="Jan 2025 - Jan 2026" />    
            </div>
       </div>
      </div>
    </div>
  )
}

export default Resume