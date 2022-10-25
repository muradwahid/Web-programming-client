import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/background.jpg'

const Header = () => {
    return (
      <div
        className="h-[85vh] text-center"
        style={{
          backgroundImage: `linear-gradient(#0891b282,#0891b282),url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='pt-32'>
          <h2 className="text-5xl text-slate-100 mb-7">
            Welcome to Web Programming
          </h2>
          <h4 className="text-2xl text-slate-100 mb-12">
            Where Quality Learning Matters
          </h4>
          <Link to="/allcourse" className='bg-white text-lg py-2 px-8 text-cyan-600 rounded-full'>View Courses</Link>
        </div>
      </div>
    );
};

export default Header;