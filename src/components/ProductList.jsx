import React from 'react';

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Example of a product item */}
        <div className="border p-4 rounded-lg shadow-lg">
          <img src="product-image.jpg" alt="Product" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-lg font-bold mb-2"> Mega Hair Growth</h3>
          <p className="text-gray-700 mb-4">Amount:     $49.99</p>
          <p className="text-gray-700 mb-4">Prod.date:  05/24</p>
          <p className="text-gray-700 mb-4">Exp.date:  04/26</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded">Add to Cart</button>
        </div>
        {/* Repeat for other products */}
      </div>
    </div>
  );
};

export default ProductList;