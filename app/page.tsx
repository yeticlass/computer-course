import React from 'react'
import Header from './Components/Header'
import Auth from './pages/(Auth)/auth'
import Footer from './Components/Footer'



const page = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
        <Header/>
        <Auth/>
        <Footer/>
        
        </div>
      
    </div>
  )
}

export default page
