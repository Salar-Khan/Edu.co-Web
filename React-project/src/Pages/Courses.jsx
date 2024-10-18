import CourseCard from "../assets/Components/CourseCard";
import Footer from "../assets/Components/Footer";
import Navbar from "../assets/Components/Navbar";
import { CourseData } from "../assets/Data/Data";
import React from "react";

     
const  Courses = () => {
  return (
    <>
    
      <Navbar />
      <div className="w-4/5 mx-auto flex flex-col m-2 md:flex-row items-center md:justify-between">
        <h1 className="font-bold text-3xl md:text-4xl">
          COURSES WE{" "}
          <span className="text-blue-600 text-3xl md:text-4xl font-bold">
            OFFER
          </span>
        </h1>
        <input
          type="text"
          placeholder="Search"
          id="search-inp"
          className="p-3 w-[270px] mt-2 md:mt-0 border-2 border-black rounded-lg"
          aria-label="Search courses"
          />
      </div>

      <div className="flex items-center justify-center mx-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CourseData.map((card) => (
            <CourseCard
              key={card.id}
              img={card.img}
              name={card.name}
              description={card.description}
              price={card.price}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
