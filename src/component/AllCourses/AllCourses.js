import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const AllCourses = () => {
    const allCourse=useLoaderData()
    return (
      <div className="course-container w-4/5 mx-auto">
        <div className="grid grid-cols-1 gap-2 border border-cyan-400 rounded-xl p-2 h-[80vh] overflow-scroll">
          {allCourse.map((course) => (
            <Link
              to={`/details/${course.id}`}
              className="text-[19px] text-cyan-700 border border-cyan-400 px-2 cursor-pointer"
            >
              {course.title}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 my-9">
          {allCourse.map((course) => (
            <CourseCart key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
};

export default AllCourses;