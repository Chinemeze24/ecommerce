import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold mb-4">Thank you for your purchase!</h1>
      <p className="text-lg">Your order has been placed successfully.</p>
      <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Continue Shopping</button>
    </div>
  );
};

export default SuccessPage;