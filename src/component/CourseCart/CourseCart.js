import React from 'react';
import { Link } from 'react-router-dom';

const CourseCart = ({ course }) => {
    const {thumbnail_url,title,id } = course;
    return (
      <div className="bg-slate-100 p-4 rounded-xl">
        <div className="h-52">
          <img className="h-[220px] w-full rounded-xl" src={thumbnail_url} alt="" />
        </div>
        <div className="my-4 flex flex-col">
          <h4 className="text-lg text-cyan-700">{title}</h4>
          <Link
            className="bg-cyan-600 py-2 text-center text-[17px] text-white rounded-lg mt-2"
            to={`/details/${id}`}
          >
            Enroll Now
          </Link>
        </div>
      </div>
    );
};

export default CourseCart;