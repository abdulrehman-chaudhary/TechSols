import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full bg-white dark:bg-dark-bg py-20 flex justify-center transition-colors duration-300">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[45%] max-w-360 flex flex-col gap-12">
        {/* Header */}
        <div data-aos="fade-up" className="text-center flex flex-col gap-2.5">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white transition-colors duration-300">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
              Us
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
            Contact now to be leading the way in technology, innovation and
            development.
          </p>
        </div>
        {/* Form */}
        <div data-aos="zoom-in" data-aos-delay="200" className="p-[1.5px] rounded-[30px] bg-linear-to-b from-brand-blue to-brand-cyan shadow-sm">
          <div className="bg-white dark:bg-black rounded-[29px] p-6 md:p-13 xl:p-16 transition-colors duration-300">
            <form className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder-gray-700 dark:placeholder-gray-400 text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder-gray-700 dark:placeholder-gray-400 text-base"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telephone"
                    className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder-gray-700 dark:placeholder-gray-400 text-base"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Service"
                    className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder-gray-700 dark:placeholder-gray-400 text-base"
                  />
                </div>
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder-gray-700 dark:placeholder-gray-400 text-base resize-none"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full px-7 py-3 md:px-28 md:py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg
                    bg-black text-white hover:bg-gray-800
                    dark:bg-white dark:text-blue-600 dark:hover:bg-gray-100"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
