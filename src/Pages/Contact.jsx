import React from "react";
import Navbar from "../assets/Components/Navbar";
import Footer from "../assets/Components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiWhatsappLogoFill } from "react-icons/pi";
import contact from "../assets/images/contact.jpg";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section
        className="w-[95%] mx-auto min-h-[89vh] bg-cover bg-fixed bg-center rounded-xl"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="flex flex-wrap items-center justify-center w-full">
          <form
            action=""
            className="p-4 shadow-2xl basis-4/7 sm:basis-3/6 mt-5 sm:w-3/5 bg-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Email Us</h1>
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              required
            />
            <textarea
              rows={5}
              className="form-input"
              placeholder="Message"
            ></textarea>
            <button className="secondary-btn w-full">Submit</button>
          </form>
          <div className="sm:w-2/6 shadow-2xl w-full p-3 flex flex-col bg-blue-200 rounded-lg sm:ml-3">
            <h1 className="text-3xl mb-4 md:mb-6 font-semibold">Contact Us</h1>
            <div className="icons">
              <FaPhoneAlt className="icon" />
              <p>+123-456-7899</p>
            </div>
            <div className="icons">
              <MdEmail className="icon" />
              <p>tes@gmail.com</p>
            </div>
            <div className="icons">
              <PiWhatsappLogoFill className="icon" />
              <p>+9348-567-899</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[70vh] text-center md:w-[70%] w-[95%] mx-auto my-4">
        <div className="w-full">
          <div className="mt-6">
            <span className="inline-flex items-center text-4xl md:text-5xl">
              <CiLocationOn className="text-red-600" />
              <h2 className="font-semibold">Address</h2>
            </span>
            <p>104 Boris Road, B-78 Saint John, CA</p>
          </div>
          <div className="h-36 mt-6">
            <iframe
              className="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104579.36092002495!2d-71.3876682984545!3d42.33147360599193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e38e4fdb8b974f%3A0xdfe5e86cc25f6ac2!2sSudbury%2C%20MA%2C%20USA!5e0!3m2!1sen!2s!4v1729186241711!5m2!1sen!2s"
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
