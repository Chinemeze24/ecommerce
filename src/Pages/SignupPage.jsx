import React from 'react';
import Navbar from '../components/Navbar';

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Username" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
            <button className="w-full bg-blue-500 text-white py-3 rounded">Sign Up</button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;