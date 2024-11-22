import React from 'react';

const SideMenuCheckout = () => {
  return (
    <div
      className="fixed inset-0 bg-white  p-4 z-40 overflow-y-auto" // Full-page menu with lower z-index
      style={{ height: '90vh' }} // Full height for side menu
    >
      {/* Order Summary */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <p>1 x Emergency First Aid at Work (EFAW) - £89.00</p>
        <hr className="my-2" />
        <div className="flex justify-between font-normal">
          <span>Subtotal</span>
          <span className='font-bold'>£89.00</span>
        </div>
        <div className="flex justify-between font-normal text-lg mt-4">
          <span>Order total</span>
          <span className='font-bold'>£89.00</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenuCheckout;
