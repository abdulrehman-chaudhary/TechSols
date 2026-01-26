import React from "react";
import { teamMembers } from "../../data";

const TeamSection = () => {
  return (
    <section className="w-full bg-brand-white dark:bg-dark-bg py-10 md:py-16 flex justify-center items-center">
      <div className="max-w-360 w-full flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-15">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-h3 sm:text-4xl md:text-h1 font-bold text-brand-black dark:text-brand-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
              Team
            </span>
          </h2>
        </div>
        {/* Team Grid */}
        <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[78%] 2xl:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {teamMembers?.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              <div className="flex items-end justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-brand-black dark:text-brand-white group-hover:text-brand-cyan transition-colors">
                  {member.name}
                </h3>
                <p className="text-brand-navy dark:text-brand-gray text-sm font-medium tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
