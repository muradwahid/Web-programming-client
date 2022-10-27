import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Payment from '../Shared/Payment/Payment';

const CourseDetails = () => {
    const course = useLoaderData()
    const {title,title_details,thumbnail_url,course_details,course_content }=course;
    // console.log(course);
    return (
      <div className="w-4/5 mx-auto my-10">
        <div>
          <div className="grid md:grid-cols-2 gap-7">
            <div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-6">
                {title}
              </h3>
              <p className="text-[18px] text-gray-600">{title_details}</p>
              <div className="flex gap-3 mt-20">
                <div className="border border-cyan-400 text-center p-2 rounded-xl shadow-md bg-slate-100 shadow-cyan-400 my-5">
                  <p className="text-gray-700">Course Duration</p>
                  <h4 className="text-xl font-semibold text-gray-600">
                    {course_details.course_duration} Month
                  </h4>
                </div>
                <div className="border border-cyan-400 text-center p-2 rounded-xl shadow-md bg-slate-100 shadow-cyan-400 my-5">
                  <p className="text-gray-700">Total Videos</p>
                  <h4 className="text-xl font-semibold text-gray-600">
                    {course_details.videos}
                  </h4>
                </div>
                <div className="border border-cyan-400 text-center p-2 rounded-xl shadow-md bg-slate-100 shadow-cyan-400 my-5">
                  <p className="text-gray-700">Total Projects</p>
                  <h4 className="text-xl font-semibold text-gray-600">
                    {course_details.project}
                  </h4>
                </div>
              </div>
            </div>
            <img
              className="md:w-[500px] md:h-[330px] w-full rounded-xl shadow-lg shadow-cyan-400"
              src={thumbnail_url}
              alt=""
            />
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-24">
            <div className="mt-0 border border-cyan-500 rounded-xl p-2 mt-4">
              <h3 className="text-3xl font-semibold text-cyan-700">
                Course Content
              </h3>
              <div>
                {course_content.map((content, idx) => (
                  <p
                    key={idx}
                    className="border border-cyan-600 my-2 p-2 rounded-md bg-cyan-300   transition duration-200 hover:bg-cyan-200 cursor-pointer "
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <Payment course={course} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
};

export default CourseDetails;