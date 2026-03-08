import React, { useState, useEffect } from "react";
import { navLinks } from "../../data";

import Sidebar from "./Sidebar";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <header data-aos="fade-down" className="w-full bg-black flex justify-center items-center">
        <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[82%] max-w-360 flex items-center justify-between py-5 md:py-5.25">
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <img
              src="/assets/svgs/curebytes-logo.svg"
              alt="CureBytes Logo"
              className="object-contain w-28 md:w-32 lg:w-40"
            />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex gap-3.75 lg:gap-8">
            {navLinks?.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white transition-all duration-300 font-medium text-[10px] md:text-xs lg:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 md:gap-2.5 lg:gap-6">
            {/* Toggle */}
            <div>
              <button
                type="button"
                onClick={toggleTheme}
                className="relative inline-flex h-7 w-14 items-center rounded-full bg-[#3B4758] cursor-pointer"
              >
                {/* Icons */}
                <div className="absolute inset-0 flex justify-between items-center px-1.5 ">
                  <img src="/assets/svgs/sun-icon.svg" alt="Light mode" />
                  <img src="/assets/svgs/moon-icon.svg" alt="Dark mode" />
                </div>
                <span
                  className={` h-5 w-5 rounded-full border border-white bg-transparent transform transition-transform duration-300 ease-in-out
                      ${isDarkMode ? "translate-x-8" : "translate-x-1"}
                    `}
                />
              </button>
            </div>
            {/*  Button */}
            <div className="hidden md:block p-[1.5px] rounded-full bg-linear-to-r from-brand-blue to-brand-cyan">
              <button className="bg-black text-white px-1.25 py-1.75 lg:px-6 lg:py-2 rounded-full font-medium hover:hover:scale-105 transition-all duration-300 text-sm">
                Get A Quote
              </button>
            </div>
            {/* Hamburger Menu */}
            <button
              className="md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <img
                src="/assets/svgs/hamburger-icon.svg"
                alt="Hamburger"
                className="w-full h-auto"
              />
            </button>
          </div>
        </div>
      </header>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        menuItems={navLinks}
      />
    </>
  );
};

export default Header;
