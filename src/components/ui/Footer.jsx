import React from "react";
import { servicesLinks } from "../../data";
import { solutionsLinks } from "../../data";
import { companyLinks } from "../../data";
import { contactInfo } from "../../data";

const Footer = () => {
  return (
    <>
      {/* Top Section */}
      <section className=" bg-brand-dark w-full flex justify-center items-center relative py-8 border-t border-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/footer-bg.png"
            alt=""
            className="w-full h-full object-cover dark:hidden"
          />
          <img
            src="/assets/images/footer-dark-bg.png"
            alt=""
            className="w-full h-full object-cover hidden dark:block"
          />
        </div>
        {/* Top Content */}
        <div className="z-12 w-[95%] md:w-[88%] lg:w-[85%] xl:w-[82%] max-w-360 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="h-full w-full">
              <img src="/assets/svgs/curebytes-logo.svg" alt="logo" />
            </div>
            <p className="text-white text-center md:text-left text-small font-medium opacity-90">
              Leading the way in technology, innovation and development.
            </p>
          </div>
          <div>
            <button className="bg-linear-to-r from-grad-blue-start to-brand-blue hover:brightness-110 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-small cursor-pointer shadow-lg hover:shadow-xl">
              Get A Quote
            </button>
          </div>
        </div>
      </section>
      {/* Bottom Section */}
      <footer className="bg-black text-white pt-16 pb-4 w-full flex justify-center items-center">
        <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[82%] max-w-360">
          <div className="flex flex-col gap-5 sm:gap-8 lg:gap-15">
            <div>
              <img src="/assets/svgs/curebytes-logo.svg" alt="logo" />
            </div>
            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-12 gap-10">
              <div className="flex flex-col gap-3 md:gap-4 xl:gap-6.25">
                <h3 className="text-lg font-bold text-white">Services</h3>
                <ul className="flex flex-col gap-3 md:gap-4 xl:gap-6.25 text-gray-400 text-sm">
                  {servicesLinks?.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 xl:gap-6.25">
                <h3 className="text-lg font-bold text-white">Solutions</h3>
                <ul className="flex flex-col gap-3 md:gap-4 xl:gap-6.25 text-gray-400 text-sm">
                  {solutionsLinks?.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 xl:gap-6.25">
                <h3 className="text-lg font-bold text-white">Company</h3>
                <ul className="flex flex-col gap-3 md:gap-4 xl:gap-6.25 text-gray-400 text-sm">
                  {companyLinks?.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 xl:gap-6.25">
                <h3 className="text-lg font-bold text-white">
                  Stay Connected With Us.
                </h3>
                <ul className="flex flex-col gap-3 md:gap-4 xl:gap-6.25 text-gray-400 text-sm">
                  <li className="flex items-start gap-4">
                    <div>
                      <img src="/assets/svgs/Shape.svg" alt="shape" />
                    </div>
                    <p>{contactInfo.address}</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <div>
                      <img src="/assets/svgs/Icons.svg" alt="icons" />
                    </div>
                    <p>{contactInfo.phone}</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <div>
                      <img src="/assets/svgs/Path.svg" alt="path" />
                    </div>
                    <p>{contactInfo.email}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-brand-blue to-brand-cyan"></div>
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
            <p className="text-white text-sm font-normal text-center md:text-left">
              &copy; 2024 TechSols | All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <img src="/assets/svgs/Facebook.svg" alt="social-icons" />
              <img src="/assets/svgs/Twitter-icon.svg" alt="social-icons" />
              <img src="/assets/svgs/LinkedIn-icon.svg" alt="social-icons" />
              <img src="/assets/svgs/Instagram.svg" alt="social-icons" />
              <img src="/assets/svgs/GooglePlus.svg" alt="social-icons" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
