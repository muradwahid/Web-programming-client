import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Payment = ({course}) => {
    const { title, thumbnail_url, price,id } = course;
    return (
      <div className="bg-cyan-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-600">Your Order</h2>
        <div>
          <div className="flex justify-between text-xl text-cyan-700 my-3 bg-white rounded-md p-2">
            <h4>Product</h4>
            <h4>Total</h4>
          </div>
          <div className="flex items-center justify-between gap-6 bg-white rounded-md p-2 text-cyan-700">
            <div className="flex gap-3 rounded-md">
              <div className="w-16">
                <img src={thumbnail_url} alt="" />
              </div>
              <div>
                <p>{title}</p>
              </div>
            </div>
            <div>${price}</div>
          </div>
          <div className="flex items-center justify-between my-3 gap-6 bg-white rounded-md p-2 mb-7 text-cyan-700">
            <p className="text-xl font-semibold">Total :</p>
            <p>${price}</p>
          </div>
        </div>
        <Link
          className="bg-cyan-700 flex justify-center py-3 text-md font-semibold text-white rounded-lg transition duration-300 hover:bg-cyan-500"
          to={`/checkout/${id}`}
        >
          Order Now
        </Link>
      </div>
    );
};

export default Payment;