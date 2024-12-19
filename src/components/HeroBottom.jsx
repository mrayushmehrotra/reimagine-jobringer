import React from 'react'

const HeroBottom = () => {
  return (
    <div className="flex flex-col gap-4">
    {/* Header Section */}
    <div className="flex flex-col items-center text-[#0D1A78]">
      <h1 className="uppercase font-extrabold text-xl">
        Bringing you the perfect job!
      </h1>
      <p className="font-bold">11,000+ JOBS to Apply</p>
    </div>
  
    {/* Main Content */}
    <div className="flex flex-col lg:flex-row items-center justify-around gap-4 p-4">
      {/* Left Section */}
      <div className="bg-[#7AD5D5] w-full lg:w-[45%] p-6 rounded-lg flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-2 w-full">
          <input
            type="text"
            placeholder="Search Jobs Now"
            className="border border-gray-400 rounded-md px-4 py-2 w-full lg:w-64"
          />
          <button className="bg-[#FFD52C] px-4 py-2 rounded-md font-semibold">
            Search
          </button>
        </div>
        <div className="flex gap-4">
          <button className="bg-white px-4 py-2 border border-gray-400 rounded-md font-semibold">
            View Jobs
          </button>
          <button className="bg-[#FFD52C] px-4 py-2 border border-gray-400 rounded-md font-semibold hover:text-white">
            Register for FREE
          </button>
        </div>
      </div>
  
      {/* Right Section */}
      <div className="bg-[#7AD5D5] w-full lg:w-[45%] p-6 rounded-lg flex flex-col items-center">
        <h1 className="text-[#0D1A78] text-center font-extrabold text-lg flex items-center gap-2">
          Quick Job Search <span className="text-lg">🔍</span>
        </h1>
        <div className="flex flex-wrap gap-2 mt-2 text-sm text-[#0D1A78]">
          <span>#Fresher</span>
          <span>#Work From Home</span>
          <span>#WFH</span>
          <span>#IT</span>
          <span>#HR</span>
          <span>#Back Office</span>
          <span>#BPO Jobs</span>
          <span>#ITES</span>
          <span>#Finance</span>
          <span>#Accounts</span>
          <span>#Medical</span>
          <span>#Pharma</span>
          <span>#Manager</span>
          <span>#Developer</span>
          <span>#Marketing</span>
          <span>#Engineering</span>
          <span>#Non Government Jobs</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroBottom