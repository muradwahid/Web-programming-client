import React from 'react';
import './Courses.css'
import { Link, useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const Courses = () => {
    const courses = useLoaderData();
    return (
      <div className="course-container md:flex gap-8 w-4/5 mx-auto my-6">
        <div className="grid grid-cols-1 gap-2 border border-cyan-400 rounded-xl p-2 h-[50vh] overflow-y-auto">
          {courses.map((course ,idx) => (
            <Link key={idx}
              to={`/details/${course.id}`}
              className="text-[19px] text-cyan-700 border border-cyan-400 px-2 cursor-pointer"
            >
              {course.title}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8">
          {courses.map((course) => (
            <CourseCart key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
};

export default Courses;