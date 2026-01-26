import React, { useState } from "react";
import { projects } from "../../data";

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="w-full bg-white dark:bg-black py-10 md:py-20 flex justify-center">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[75%] max-w-360 flex flex-col gap-8 md:gap-14">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Projects
            </span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row w-full bg-white rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl min-h-125">
          {/* LEFT */}
          <div className="w-full lg:w-[45%] bg-white p-8 md:p-12 md:pr-22  gap-4 flex flex-col justify-between">
            <div className="flex flex-col gap-7.5">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0587FC]">
                {currentProject.title}
              </h3>
              <p className="text-black font-normal leading-[135%] text-base md:text-[16px]">
                {currentProject.description}
              </p>
            </div>
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-brand-gray shadow-md flex items-center justify-center"
              >
                <img
                  src="/assets/svgs/arrow-right-black.svg"
                  className="rotate-180"
                />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center"
              >
                <img src="/assets/svgs/arrow-right-black.svg" />
              </button>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-[72%]  relative overflow-hidden flex items-center justify-center">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover lg:object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
