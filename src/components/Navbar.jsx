import React, { useState, useEffect } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoReturnUpBack } from "react-icons/io5";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Handle window resize to update `isMobile`
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        // Mobile View: Render Hamburger and Bottom Icons
        <>
          {/* Hamburger Menu */}
          <div className="flex items-center justify-between  text-3xl">
          <div>
            <img
              className="w-38 h-12"
              src="https://www.jobringer.com/images/logonew.svg"
              alt="logo"
            />
          </div>
          <div>
          <h1 href="#" class="btn-shine">Get early access</h1>
          </div>
            <RxHamburgerMenu />
          </div>

          {/* Bottom Icons */}
          <div className="absolute w-full h-16 text-3xl bottom-0 p-4 flex justify-around border-t border-gray-300 bg-white">
            <div className="flex flex-col items-center">
              <IoMdPersonAdd style={{scale : "2"}}  />
              <p className="text-sm">Login</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHome style={{scale : "2"}}  />
              <p className="text-sm">Home</p>
            </div>
            <div className="flex flex-col items-center">
              <PiBagSimpleFill style={{scale : "2"}}  />
              <p className="text-sm">Jobs</p>
            </div>
            <div className="flex flex-col items-center">
              <IoReturnUpBack style={{scale : "2"}}  />
              <p className="text-sm">Back</p>
            </div>
          </div>
        </>
      ) : (
        // Desktop View: Render Full Navbar
        <div className="w-full flex items-center justify-between h-16 p-4 shadow-md border-b border-gray-300 bg-white">
          {/* Logo */}
          <div>
            <img
              className="w-38 h-12"
              src="https://www.jobringer.com/images/logonew.svg"
              alt="logo"
            />
          </div>
          <div className="flex gap-x-4">

          {/* Nav Links */}
          <ul className="flex list-none gap-x-8 font-semibold">
            <li className="invisibleDiv">Jobs</li>
          <li className="invisibleDiv">Active employees</li>
            <li className="invisibleDiv">Job Blogs</li>
            <li className="invisibleDiv">Pricing</li>
          </ul>

          {/* Buttons */}
            <button className="hover:bg-[#FFD52C] px-4 border border-gray-400 py-2 rounded-md font-semibold ">
              Jobseeker Login
            </button>
            <button className="hover:bg-[#323E6B] hover:text-white bg-[#FFD52C] px-4 border border-gray-400 py-2 font-semibold rounded-md ">
              <h1>Employee Login</h1>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
