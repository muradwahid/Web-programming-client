import React from 'react';
import './Courses.css'
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const Courses = () => {
    const courses = useLoaderData();
    return (
      <div className="course-container w-4/5 mx-auto">
        <div className="border border-cyan-400 rounded-xl p-2 h-[80vh]">
          {courses.map((course) => (
            <p className="my-5 text-[19px] text-cyan-700 border border-cyan-400 px-2 cursor-pointer">
              {course.title}
            </p>
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