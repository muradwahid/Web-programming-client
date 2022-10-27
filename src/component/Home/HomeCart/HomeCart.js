import React from 'react';
import { FaWalking, FaArrowsAltH, FaHandshake} from "react-icons/fa";
const HomeCart = () => {
    return (
      <div className="w-4/5 mx-auto grid lg:grid-cols-3 gap-10 lg:mt-[-100px] md:mt-[-50px] ">
        <div className="text-center bg-slate-100 h-[360px] shadow-lg shadow-slate-400 px-16 py-9 rounded-md">
          <FaWalking className="text-[50px] mx-auto mb-5 text-cyan-600" />
          <p className="font-bold text-2xl mb-5 text-gray-700">
            organized & step by step
          </p>
          <p className="text-2xl text-gray-600">
            Our course is organized and taught in step by step manner
          </p>
        </div>
        <div className="text-center bg-slate-100 h-[360px] shadow-lg shadow-slate-400 px-16 py-9 rounded-md">
          <FaArrowsAltH className="text-[50px] mx-auto mb-5 text-cyan-600" />
          <p className="font-bold text-2xl mb-5 text-gray-700">
            complete & in depth
          </p>
          <p className="text-2xl text-gray-600">
            our courses are most complete and in-depth manner.You will learn by
            doing
          </p>
        </div>
        <div className="text-center bg-slate-100 h-[360px] shadow-lg shadow-slate-400 px-16 py-9 rounded-md">
          <FaHandshake className="text-[50px] mx-auto mb-5 text-cyan-600" />
          <p className="font-bold text-2xl mb-5 text-gray-700">
            premium support
          </p>
          <p className="text-2xl text-gray-600">
            Get live support through F B and Skype when required
          </p>
        </div>
      </div>
    );
};

export default HomeCart;