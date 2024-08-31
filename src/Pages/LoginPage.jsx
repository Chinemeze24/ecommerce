import React from 'react';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Log in to Your Account</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
            <button className="w-full bg-blue-500 text-white py-3 rounded">Log In</button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;