import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    const {title,title_details,thumbnail_url,details,course_details,course_content }=course;
    // console.log(course);
    return (
      <div className='w-4/5 mx-auto'>
        <div>
          <div>
            <div>
              <h3>{title}</h3>
              <p>{title_details}</p>
              <div>
                <div>
                  <p>Course Duration</p>
                  <h4>{course_details.course_duration} Month</h4>
                </div>
                <div>
                  <p>Total Videos</p>
                  <h4>{course_details.videos}</h4>
                </div>
                <div>
                  <p>Total Projects</p>
                  <h4>{course_details.project}</h4>
                </div>
              </div>
                    </div>
                    <img src={thumbnail_url} alt="" />
          </div>
          <div>
            <h3>Course Content</h3>
            <div>
              {course_content.map((course) => (
                <p>{course}</p>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
};

export default CourseDetails;