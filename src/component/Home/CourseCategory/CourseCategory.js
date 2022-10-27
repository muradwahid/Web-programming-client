import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({ category }) => {
    const {id,name,img} = category;
    return (
      <div className="bg-slate-100 p-4 rounded-xl">
        <div className="md:h-52">
          <img className=" w-full rounded-xl" src={img} alt="" />
        </div>
        <div className="my-4 flex flex-col">
          <h4 className="text-lg text-cyan-700">{name}</h4>
          <Link
            className="bg-cyan-600 py-2 text-center text-[17px] text-white rounded-lg mt-2"
            to={`/courses/${id}`}
          >
            View Courses
          </Link>
        </div>
      </div>
    );
};

export default CourseCategory;