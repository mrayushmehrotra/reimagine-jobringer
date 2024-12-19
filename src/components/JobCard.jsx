import React, { useRef, useState, useEffect } from "react";

const JobCard = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    const carousel = carouselRef.current;
    setIsDragging(true);
    setStartX(e.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const carousel = carouselRef.current;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Multiplied by 2 for faster scroll
    carousel.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = 300; // Adjust this value as needed for how far the carousel should move
    carousel.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const autoScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Check if the carousel has reached the end
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
      carousel.scrollTo({ left: 0, behavior: "smooth" }); // Reset to the start
    } else {
      carousel.scrollBy({ left: 300, behavior: "smooth" }); // Scroll to the right
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoScroll();
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const jobs = [
    {
      title: "SailPoint Developer",
      company: "CrossAsyst Infotech Private Limited",
      type: "Remote job",
      employment: "Full Time - Permanent",
      experience: "5 - 7 Years",
      location: "Pune | Mumbai (All Areas) / India",
    },{
        title: "SailPoint Developer",
        company: "CrossAsyst Infotech Private Limited",
        type: "Remote job",
        employment: "Full Time - Permanent",
        experience: "5 - 7 Years",
        location: "Pune | Mumbai (All Areas) / India",
      },{
        title: "SailPoint Developer",
        company: "CrossAsyst Infotech Private Limited",
        type: "Remote job",
        employment: "Full Time - Permanent",
        experience: "5 - 7 Years",
        location: "Pune | Mumbai (All Areas) / India",
      },{
        title: "SailPoint Developer",
        company: "CrossAsyst Infotech Private Limited",
        type: "Remote job",
        employment: "Full Time - Permanent",
        experience: "5 - 7 Years",
        location: "Pune | Mumbai (All Areas) / India",
      },{
        title: "SailPoint Developer",
        company: "CrossAsyst Infotech Private Limited",
        type: "Remote job",
        employment: "Full Time - Permanent",
        experience: "5 - 7 Years",
        location: "Pune | Mumbai (All Areas) / India",
      },
    {
      title: "Business Development Lead",
      company: "RC Project Consultancy",
      type: "In Office job",
      employment: "Full Time",
      experience: "15 - 18 Years",
      location: "Ahmedabad / India",
    },
    {
      title: "React Developer",
      company: "Tech Solutions Inc",
      type: "Remote job",
      employment: "Contract",
      experience: "2 - 5 Years",
      location: "Delhi / India",
    },
    {
      title: "Backend Developer",
      company: "Innovative Startups Pvt Ltd",
      type: "Remote job",
      employment: "Full Time",
      experience: "3 - 6 Years",
      location: "Bangalore / India",
    },
    {
      title: "UX Designer",
      company: "Design Studio",
      type: "In Office job",
      employment: "Full Time",
      experience: "4 - 8 Years",
      location: "Hyderabad / India",
    },
  ];

  return (
    <>
      <center className="self-center text-[#0D1A78] uppercase font-extrabold text-xl mb-4">
        Featured Jobs
      </center>
      <div className="relative  overflow-hidden w-full p-3">
        {/* Left Button */}
        <button
          className="absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white p-5  rounded-full shadow-md hover:bg-gray-100 transition"
          onClick={() => scrollCarousel("left")}
        >
          ◀
        </button>
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide p-4"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white shadow-lg border rounded-lg p-8 gap-y-4 relative"
            >
              {/* Badge */}
              <span
                className={`absolute top-2 right-2 px-3 py-1 rounded-full text-white text-sm ${
                  job.type === "Remote job" ? "bg-yellow-500" : "bg-yellow-600"
                }`}
              >
                {job.type}
              </span>
              {/* Job Details */}
              <h2 className="text-blue-700 font-bold text-lg">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.employment}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                📅 {job.experience}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                📍 {job.location}
              </p>
              {/* Apply Button */}
              <button className="mt-4 bg-teal-400 text-white px-4 py-2 rounded-md w-full hover:bg-teal-500 transition">
                Apply ➤
              </button>
            </div>
          ))}
        </div>
        {/* Right Button */}
        <button
          className="absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white p-5 rounded-full shadow-md hover:bg-gray-100 transition"
          onClick={() => scrollCarousel("right")}
        >
          ▶
        </button>
      </div>
    </>
  );
};

export default JobCard;
