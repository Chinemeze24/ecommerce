import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">Brand</div>
      <div className="hidden sm:flex space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Shop</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
      <div className="sm:hidden">
        <button className="focus:outline-none">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;