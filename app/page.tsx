// pages/index.tsx
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
      {/* Header */}
      <header className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">YetiClass</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline font-semibold">Home</a>
          <a href="#" className="hover:underline font-semibold">Courses</a>
          <a href="#" className="hover:underline font-semibold">About</a>
          <a href="#" className="hover:underline font-semibold">Contact</a>
        </nav>
      </header>

      {/* Centered Sign-Up Card */}
      <main className="flex flex-1 justify-center items-center px-4">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-blue-900 text-2xl font-bold mb-6">Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <button className="w-full bg-blue-900 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Register
          </button>
          <p className="mt-4 text-sm">
            Already have an account? <a href="#" className="text-blue-700 hover:underline">Login</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-200 text-gray-700">
        &copy; 2026 YetiClass. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;