import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Header from '../Header'
import Navbar from '../Navbar'
import { AuthProvider, useAuth } from "../../hooks/AuthContext";
import ShowResults from '../ShowResults';
import SearchBar from '../SearchBar';


const SearchPage = () => {
    const {user, isAuthenticated} = useAuth()
    console.log("home",isAuthenticated, user)

  return (
    // <AuthProvider>
    <MaxWidthWrapper>
        <Navbar/>
        <Header props="Welcome!"/>
        <SearchBar/>
        <ShowResults/>
    </MaxWidthWrapper>
    // </AuthProvider>
  )
}

export default SearchPage
