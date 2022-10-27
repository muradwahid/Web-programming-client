import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
      const courses = useLoaderData();
  const { thumbnail_url, price, title } = courses;
  const confirmation = () => {
    toast.success("Successfully Payment complete.")
  }
  return (
    <div className="w-2/5 mx-auto flex gap-6 bg-cyan-700 p-4 rounded-xl my-14 h-[400px] border">
      <div className="w-[260px]">
        <img
          className="h-[280px] w-[260px] rounded-lg mb-3"
          src={thumbnail_url}
          alt=""
        />
        <p className="font-semibold text-white mb-2">{title}</p>
        <p className="font-bold text-center text-white">
          Total Price: ${price}
        </p>
      </div>
      <div className="w-[260px]">
        <div>
          <p className="text-white font-semibold my-4">CREDIT CARD CHECKOUT</p>

          <div className="my-4">
            <small className="text-white">CARDHOLDER'S NAME</small>
            <input className="w-full py-1 rounded-lg" type="text" />
          </div>
          <div>
            <small className="text-white">CARD NUMBER</small>
            <input className="w-full py-1 rounded-lg" type="text" />
          </div>
          <div className="flex gap-4 mt-4 mb-12">
            <div className="w-9/12">
              <small className="text-white">EXPIRATION DATE</small>
              <input
                className="w-full rounded-md"
                type="text"
                placeholder="--- - ---- --"
              />
            </div>
            <div className="w-1/4">
              <small className="text-white">CVV</small>
              <input className="w-full rounded-md" type="text" />
            </div>
          </div>
          <Link
            onClick={confirmation}
            className="bg-white py-2 px-6 font-semibold rounded-md mt-6 hover:text-cyan-600"
          >
            PLACE ORDER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;