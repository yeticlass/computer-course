
import React from "react";

const Auth = () => {
  return (
   
  
      <main className="flex flex-1 justify-center items-center px-4">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-blue-900 text-2xl font-bold mb-6">Join Class?</h2>
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

    
      
  );
};

export default Auth;