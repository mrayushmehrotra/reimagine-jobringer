import React, { useRef, useState, useEffect } from "react";

const FeaturedEmployee = () => {
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
    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
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

  const images = [
    {
      src: "https://www.jobringer.com/images/content/company-logo/hjp865ef4233d489190ee7a602824b6392b.png",
      alt: "Company 1",
    },
    {
      src: "https://www.jobringer.com/images/content/company-logo/hjpa38e6289f43c488f3c80d24bf3f76b7c.png",
      alt: "Company 2",
    },
    {
      src: "https://www.jobringer.com/images/content/company-logo/hjp447885f2519ded51a1d8da2b71184d00.png",
      alt: "Company 3",
    },
    {
      src: "https://www.jobringer.com/images/content/company-logo/hjpde0325910dc79892a78e0d492d2cae89.png",
      alt: "Company 4",
    }, {
        src: "https://www.jobringer.com/images/content/company-logo/hjpcb99a2c978ee137fae0ee8938a86299f.png",
        alt: "Company 5",
      },
      {
        src: "https://www.jobringer.com/images/content/company-logo/hjp189b0471d7a192aa3b6e2703c2415b93.png",
        alt: "Company 6",
      },{
        src: "https://www.jobringer.com/images/content/company-logo/hjp8c622e7c256217dd2bc2c8f848fe1675.png",
        alt: "Company 7",
      },
    
   
  ];

  return (
    <div className="flex items-center justify-center flex-col ">
      <center className="self-center text-[#0D1A78] uppercase font-extrabold text-xl mb-4">
        Featured Employee
      </center>
      <div className="relative  overflow-hidden w-full flex ">

        <div
          ref={carouselRef}
          className="flex gap-4  overflow-x-scroll scrollbar-hide p-4"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
          {images.map((image, index) => (
              <div
              key={index}
              className="min-w-[300px] bg-white shadow-lg border rounded-lg p-8 gap-y-4 relative"
              >
              {/* Badge */}
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className=" top-2 right-2 px-3 py-1 rounded-full text-white text-sm"
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEmployee;
