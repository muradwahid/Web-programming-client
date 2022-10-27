import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Shared/Header/Header';
import CourseCategory from './CourseCategory/CourseCategory';
import HomeCart from './HomeCart/HomeCart';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
        .then(data=>setCategories(data))
    },[])
    return (
      <div>
        <Header />
        <HomeCart />
        <div className='w-4/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-36 my-28'>
          {categories.map((category) => (
            <CourseCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    );
};

export default Home;