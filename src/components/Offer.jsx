import React from "react";

const Offer = () => {
  return (
    <div className="w-full p-3">
      <div className="flex items-center flex-wrap justify-between bg-gradient-to-r from-[#21BFCE] to-[#03298B]  p-3 rounded-lg  ">
        <h1 className="text-2xl font-semibold text-white ">EMPLOYERS</h1>
        <h1 href="#" class="text-[#FFD52C] font-extrabold">
          WELCOME OFFER - FREE JOB Postings and Much More.
        </h1>
        <div className="flex gap-x-5">
          <button className="hover:text-white  bg-[#FFD52C] px-4 border border-gray-400 py-2 rounded-md font-semibold ">
            Register for FREE
          </button>
          <button className="bg-white px-2 border border-gray-400 rounded-md font-medium ">
            Post A Job
          </button>
          <a href="#" className="text-white hover:text-[#0033EB] self-center underline "  >Sales Inquiry </a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
