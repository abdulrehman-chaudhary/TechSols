import React from "react";
import { medicalServices } from "../../data";
import { itServices } from "../../data";

const DetailedServicesSection = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-20  flex justify-center items-center transition-colors duration-300">
      <div className="w-full max-w-360 flex flex-col justify-center items-center gap-15">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-h3 md:text-5xl font-bold text-black dark:text-white transition-colors duration-300">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
              Services
            </span>{" "}
            Which We Provide
          </h2>
        </div>
        <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Medical*/}
          <div className="flex flex-col gap-8">
            <h3 className="text-h3 font-bold text-black dark:text-white  transition-colors duration-300">
              Medical Billing
            </h3>
            <ul>
              {medicalServices?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-black font-semibold dark:text-gray-300 transition-colors duration-300 text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* IT */}
          <div className="flex flex-col gap-8">
            <h3 className="text-h3 font-bold text-black dark:text-white transition-colors duration-300">
              IT Services
            </h3>
            <ul className="">
              {itServices?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-black font-semibold dark:text-gray-300 transition-colors duration-300 text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
