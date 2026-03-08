import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center items-center bg-white dark:bg-dark-bg py-10 md:py-16">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[82%] max-w-360 flex flex-col md:flex-row items-center gap-10 md:gap-3">
        {/* Left */}
        <div data-aos="fade-right" className=" flex flex-1 flex-col gap-6 md:gap-7.5 items-center md:items-start text-center md:text-left">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-h1 font-extrabold text-brand-black dark:text-white capitalize leading-tight">
              Transforming Ideas <br className="hidden lg:block" /> Into{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
                Digital Solutions
              </span>
            </h1>
            <p className="font-semibold text-lg md:text-[20px] text-black dark:text-white">
              Your Path to Tech Excellence with TechSols.
            </p>
          </div>
          <div>
            <button className="group relative p-0.5 rounded-full bg-linear-to-r from-brand-blue to-brand-cyan ">
              <span className="flex items-center gap-3 py-2.5 px-5 lg:px-8 lg:py-4 bg-white rounded-full dark:bg-black dark:text-white font-bold text-black transition-all group-hover:bg-transparent group-hover:text-white">
                Contact Us
                <img
                  src="/assets/svgs/arrow-right-black.svg"
                  alt=""
                  className="dark:invert w-3 h-3 md:w-auto md:h-auto"
                />
              </span>
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div data-aos="fade-left" className="w-full md:w-[45%] flex justify-center md:justify-end">
          <img
            src="/assets/images/herosection-image.png"
            alt="Digital Solutions Dashboard Illustration"
            className="w-full max-w-lg  h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
