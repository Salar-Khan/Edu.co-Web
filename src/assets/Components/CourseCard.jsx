import React from 'react';

const CourseCard = ({ img, name, description, price }) => {
  return (
    <div className="flex flex-col p-5 shadow-2xl rounded-lg">
      <article className="rounded-xl overflow-hidden mb-5">
        <img src={img} alt={`Course: ${name}`} />
        <h1 className="text-2xl md:text-3xl font-medium mt-3">{name}</h1>
        <p className="mt-2">{description}</p>
        <h2 className="text-xl mt-5">{price}</h2>
        <button className="primary-btn rounded-lg font-semibold mt-4">Buy Course</button>
      </article>
    </div>
  );
};

export default CourseCard;


