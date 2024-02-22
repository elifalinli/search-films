import React from 'react'
import ShowCard from './ShowCard'
import MaxWidthWrapper from './MaxWidthWrapper'
import { useAuth } from "../hooks/AuthContext";


const ShowResults = () => {
  
  return (
    <MaxWidthWrapper>
        <div className='my-10 pt-10'>
        <div className="rounded-xl border border-gray-900 p-3 sm:p-12 w-auto ">
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-3 w-full">
            <li>
              <ShowCard/>   
            </li>
          </ul>
        </div>
        </div>
      </MaxWidthWrapper>
  )
}

export default ShowResults
