import React, { useState } from "react";
import { faqs } from "../../data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white dark:bg-dark-bg flex justify-center items-center py-10 md:py-16 text-black dark:text-white">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[61%] max-w-360 flex flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-15">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-h3 sm-text-4xl md:text-h1 font-bold">
            Frequently Asked Question
          </h2>
        </div>
        {/* FAQ List */}
        <div className="flex flex-col gap-3.75">
          {faqs?.map((faq, index) => {
            return (
              <div
                key={index}
                className={`border rounded-2xl "flex flex-col gap-3.75 transition-all duration-300 overflow-hidden
          ${
            openIndex === index
              ? "border-blue-600 dark:bg-gray-900/20"
              : "border-black dark:border-white hover:border-blue-500 bg-transparent"
          }
        `}
              >
                <div>
                  {/* Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <p className="text-lg md:text-xl font-medium pr-8">
                      {faq.question}
                    </p>
                    <div
                      className={`w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center transition-transform duration-300 shrink-0 ${
                        openIndex === index ? "-rotate-90" : "rotate-0"
                      }`}
                    >
                      <img
                        src="/assets/svgs/arrow-down.svg"
                        alt="Arrow Icon"
                        className="dark:invert transition-all duration-300"
                      />
                    </div>
                  </button>
                </div>
                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden
            ${
              openIndex === index
                ? "max-h-40 opacity-100 pb-6"
                : "max-h-0 opacity-0 pb-0"
            }
          `}
                >
                  <div className="px-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
