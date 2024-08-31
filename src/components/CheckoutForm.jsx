import React from 'react';

const CheckoutForm = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <input type="text" placeholder="Address" className="w-full p-3 border rounded" />
        <button className="w-full bg-green-500 text-white py-3 rounded">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;