import Navbar from "../assets/Components/Navbar";
import Footer from "../assets/Components/Footer";
import hero from "../assets/images/hero (2).png";
import { PiCertificate } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="w-11/12 mx-auto min-h-[73vh] mt-5">
        <div className="w-full flex flex-wrap justify-between items-center md:flex-row">
          <div className="leading-10 md:w-1/2 p-3 sm:p-0">
            <h1 className="md:text-7xl text-6xl font-extrabold">
              Start Your <span className="text-blue-700">Journey</span>
            </h1>
            <p className="text-xl mt-3">
              By choosing your dream career Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quo consequuntur blanditiis
              doloribus modi obcaecati commodi perspiciatis placeat
              reprehenderit voluptates sequi.
            </p>
            <div className="flex space-x-1 mt-3">
              <Link to={"./contact"}>
                {" "}
                <button className="primary-btn" aria-label="Contact Us">
                  Contact
                </button>
              </Link>
              <Link to={"./signup"}>
                <button className="secondary-btn">Register</button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={hero}
              className="mx-auto"
              alt="A representation of starting a journey"
            />
          </div>
        </div>
      </div>

      {/* Career Benefits Section */}
      <div className="w-full text-center bg-green-100 p-4 md:py-4">
        <h2 className="text-3xl">Invest In Your Career</h2>
        <div className="w-[92%] mx-auto flex flex-col md:flex-row md:items-center">
          <div className="careers">
            <TbTargetArrow className="text-5xl md:text-center" />
            <span className="text-left ml-2 md:text-center">
              <h2 className="text-xl">Explore new skills</h2>
              <p>
                Access 100+ courses in AI, business, technology, and more.
                Explore the modern world of skills.
              </p>
            </span>
          </div>
          <div className="careers">
            <PiCertificate className="text-5xl md:text-center" />
            <span className="text-left md:text-center ml-2">
              <h2 className="text-xl">Earn Valuable Credentials</h2>
              <p>
                Get certificates for every course you finish and boost your
                chances of getting hired.
              </p>
            </span>
          </div>
          <div className="careers">
            <IoIosStarOutline className="text-5xl md:text-center" />
            <span className="text-left ml-2 md:text-center">
              <h2 className="text-xl">Learn From The Best</h2>
              <p>
                Take your skills to the next level with expert-led courses and
                Coursera Coach, your AI-powered assistant.
              </p>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
