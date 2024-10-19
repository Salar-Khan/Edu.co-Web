import Footer from "../assets/Components/Footer";
import Navbar from "../assets/Components/Navbar";
import React from "react";
import Aboutpic from "../assets/images/About.jpg";
import Motivepic from "../assets/images/Motive.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="w-11/12 min-h-[87vh] mx-auto mt-1">
        {/* About Us Section */}
        <div className="w-full flex flex-wrap justify-between items-center md:flex-row">
          <div className="p-3 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              About <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque harum reprehenderit quaerat tempora dicta vel velit
              animi dolor incidunt minus cum, ab quibusdam. Eius repellat
              dolorum, ea ad dolorem natus, placeat, nulla qui molestiae
              eligendi possimus temporibus quis quidem! Eligendi! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Voluptatum laborum
              excepturi molestiae a itaque veritatis nihil amet adipisci dolorem
              accusantium!
            </p>
            <button className="secondary-btn m-3">Read More</button>
          </div>
          <div className="mx-auto md:w-1/2">
            <img src={Aboutpic} alt="About us" />
          </div>
        </div>

        {/* Our Motive Section */}
        <div className="w-full flex flex-wrap items-center justify-between mt-2 md:flex-row-reverse">
          <div className="p-4 md:p-7 lg:p-4 md:w-1/2">
            <h1 className="text-3xl font-bold md:text-5xl">
              Our <span className="text-blue-700">Motive</span>
            </h1>
            <p className="mt-3 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              nostrum aliquam doloremque qui eligendi, corrupti repellat
              doloribus voluptatem sit ipsam debitis ea non a eius excepturi?
              Amet eligendi in ipsum iste eius vitae officia. Reprehenderit
              fugit amet consequatur facilis modi possimus, dignissimos ut sed
              ducimus, iste similique blanditiis, ratione rem fo.
            </p>
            <button className="secondary-btn m-2">Read More</button>
          </div>
          <div className="p-5 md:p-4 md:w-1/2">
            <img src={Motivepic} alt="Our motive" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
