import React from "react";
import { aboutUsParagraphs } from "../../data";

const AboutUsSection = () => {
  return (
    <section className="relative bg-white dark:bg-dark-bg flex justify-center items-center py-10 md:py-16">
      <div className="absolute inset-0">
        <img
          src="/assets/images/about-section-bg.png"
          alt="Background Image"
          className="hidden lg:block 2xl:hidden"
        />
      </div>
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[73%] max-w-360 relative z-10 flex flex-col justify-center items-center gap-8 sm:gap-10 ">
        {/* Header */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-h3 sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
              Us
            </span>
          </h2>
        </div>
        <div className="relative p-2.5 md:p-5">
          {/* Top-Left */}
          <div className="absolute top-0 left-0 w-7.5 h-7.5 border-t-4 border-l-4 border-black dark:border-white"></div>
          {/* Content Body */}
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col gap-7">
            <div>
              <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
                CureBytes
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Empowering Your Digital Journey
              </h3>
            </div>

            <div className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed space-y-6 text-justify md:text-left">
              {aboutUsParagraphs?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          {/* Bottom-Right  */}
          <div className="absolute bottom-0 right-0 w-7.5 h-7.5 border-b-4 border-r-4 border-gray-900 dark:border-white"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
