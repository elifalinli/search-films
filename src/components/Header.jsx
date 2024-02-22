import React from 'react'

const Header = ({props}) => {
  
  return (
    <div className="rounded-xl border border-gray-900  mt-10 p-6 sm:p-12">
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
    Search Films & Shows
    </h1>
    <h3 className=" mt-9 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
    {props}
    </h3>
    </div>
  )
}

export default Header
