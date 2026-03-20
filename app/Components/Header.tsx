import React from 'react'

const Header = () => {
  return (
    <div>
         
      <header className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yeti Class</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline font-semibold">Home</a>
          <a href="#" className="hover:underline font-semibold">Courses</a>
          <a href="#" className="hover:underline font-semibold">About</a>
          <a href="#" className="hover:underline font-semibold">Contact</a>
        </nav>
      </header>

    </div>
  )
}

export default Header
