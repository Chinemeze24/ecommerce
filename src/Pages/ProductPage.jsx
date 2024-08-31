import React from 'react';
import Navbar from '../components/Navbar';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src="product-image.jpg" alt="Product" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <h1 className="text-3xl font-bold mb-4">Product Name</h1>
            <p className="text-lg text-gray-700 mb-4">$49.99</p>
            <p className="text-gray-700 mb-6">
              Detailed product description goes here. It explains the features, benefits, and any other relevant information about the product.
            </p>
            <button className="w-full bg-blue-500 text-white py-3 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;