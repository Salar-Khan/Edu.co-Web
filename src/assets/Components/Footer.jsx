import ItemContainer from "./ItemContainer";
import { FaTwitter,  FaFacebookSquare } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4">
        <h1 className="text-3xl md:text-5xl mb-6 md:w-2/5 lg:leading-normal font-extrabold">
          Take The <span className="text-blue-600">Step</span>
        </h1>
        <div className="flex flex-col sm:flex-row">
          <input
            type="email"
            className="outline-none p-3 w-full text-black sm:w-72 sm:mr-5 mr-1 lg:mb-0 mb-4 rounded px-2"
            placeholder="Enter Email"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-blue-700 p-3 text-white hover:bg-blue-500 duration-500 py-2.5 md:w-auto w-full"
            aria-label="Submit email"
          >
            Submit
          </button>
        </div>
      </div>

      <ItemContainer />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-6 text-sm pt-2">
        <span>&copy; 2024. All Rights Reserved</span>
        <span>Terms . Privacy Policy</span>
        <div className="inline-flex items-center mb-2 text-blue-400">
          {/* <FaSquareInstagram size={30} className="m-1 hover:text-blue-500" aria-label="Instagram" /> */}
          <FaTwitter size={30} className="m-1 hover:text-blue-500" aria-label="Twitter" />
          <FaFacebookSquare size={30} className="m-1 hover:text-blue-500" aria-label="Facebook" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
