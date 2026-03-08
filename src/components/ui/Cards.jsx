import React from "react";
import { services } from "../../data";

const ServicesSection = () => {
  return (
    <section className="w-full bg-white dark:bg-dark-bg flex justify-center items-center py-10 md:py-16">
      <div className="max-w-360 flex flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-15">
        {/* Header */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-h3 sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
              Services
            </span>
          </h2>
        </div>
        <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[61%] 2xl:w-full max-w-360 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-17.5">
          {services?.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up" data-aos-delay={index * 100}
              className="group h-full p-[1.5px] rounded-4xl bg-linear-to-b from-brand-blue to-brand-cyan dark:bg-none transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              {/* Inner Card Content */}
              <div className="relative h-full bg-white dark:bg-[linear-gradient(220.04deg,#080808_-4.19%,#7D7777_49.89%,#080808_102.44%)] rounded-[31px] p-8 md:p-12.5 flex flex-col gap-4 md:gap-6 items-center text-center">
                <div className="absolute top-8 right-8  dark:invert">
                  <img src="/assets/svgs/border-arrow.svg" alt="Right arrow" />
                </div>
                <div>
                  <img
                    src={service.iconLight}
                    alt={service.title}
                    className="w-16 h-16 object-contain dark:hidden"
                  />
                  <img
                    src={service.iconDark}
                    alt={service.title}
                    className="w-16 h-16 object-contain hidden dark:block"
                  />
                </div>
                <div className="flex flex-col gap-3.75">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-[#969696] font-normal dark:text-white text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
