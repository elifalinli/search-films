import React from 'react'
import MaxWidthWrapper from "../MaxWidthWrapper";
import Navbar from "../Navbar";
import Header from "../Header";
import SignIn from "../SignIn";

const HomePage = () => {

  return (
    <MaxWidthWrapper className="mb-8 mt-3 sm:mt-10 flex flex-col items-center text-center justify-center">
        <Navbar />
        <Header props="Please sign-in to proceed!" />
        <SignIn />
      </MaxWidthWrapper>
  )
}

export default HomePage
